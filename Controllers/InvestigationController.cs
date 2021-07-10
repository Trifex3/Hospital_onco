using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital_onco.Data;
using Hospital_onco.Models;
using Hospital_onco.ViewModels;
using AutoMapper;
using Microsoft.Extensions.Logging;

namespace Hospital_onco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvestigationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger<InvestigationController> _logger;

        public InvestigationController(ApplicationDbContext context, IMapper mapper, ILogger<InvestigationController> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }

        // GET: api/Investigation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InvestigationWithDoctorsViewModel>>> GetInvestigations()
        {
            return await _context.Investigations
                .Include(i => i.Doctors)
                .Select(i => _mapper.Map<InvestigationWithDoctorsViewModel>(i)).ToListAsync();
        }

        // GET: api/Investigation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InvestigationViewModel>> GetInvestigation(int id)
        {
            var investigation = await _context.Investigations.FindAsync(id);

            if (investigation == null)
            {
                return NotFound();
            }

            return _mapper.Map<InvestigationViewModel>(investigation);
        }


        //GET: api/Activities/FilterByRisk/1
        [HttpGet]
        [Route("filterByRisk/{maxRisk}")]
        public async Task<ActionResult<IEnumerable<InvestigationViewModel>>> FilterByRisk(int maxRisk)
        {
            return await _context.Investigations.Where(i => i.RiskLevel <= maxRisk)
                                            .OrderBy(i => i.RiskLevel).Select(i => _mapper.Map<InvestigationViewModel>(i)).ToListAsync();
        }

        //GET: api/Activities/FilterByType/CT
        [HttpGet]
        [Route("filterByType/{investigationType}")]
        public async Task<ActionResult<IEnumerable<InvestigationViewModel>>> FilterByType(string investigationType)
        {
            return await _context.Investigations.Where(i => i.Type.Equals(investigationType)).Select(i => _mapper.Map<InvestigationViewModel>(i)).ToListAsync();
        }

        //GET: api/Investigations/SortByName
        [HttpGet]
        [Route("sortByName")]
        public async Task<ActionResult<IEnumerable<InvestigationViewModel>>> SortByName()
        {
            return await _context.Investigations.OrderBy(i => i.Name).Select(i => _mapper.Map<InvestigationViewModel>(i)).ToListAsync();
        }
        // PUT: api/Investigation/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvestigation(int id, InvestigationViewModel investigation)
        {
            if (id != investigation.Id)
            {
                return BadRequest();
            }

            _context.Entry(_mapper.Map<Investigation>(investigation)).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvestigationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Investigation
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Investigation>> PostInvestigation(InvestigationViewModel investigationRequest )
        {
            Investigation investigation = _mapper.Map<Investigation>( investigationRequest);
            _context.Investigations.Add(investigation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvestigation", new { id = investigation.Id }, investigation);
        }

        // DELETE: api/Investigation/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvestigation(int id)
        {
            var investigation = await _context.Investigations.FindAsync(id);
            if (investigation == null)
            {
                return NotFound();
            }

            _context.Investigations.Remove(investigation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InvestigationExists(int id)
        {
            return _context.Investigations.Any(e => e.Id == id);
        }
    }
}
