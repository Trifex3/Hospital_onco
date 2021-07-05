using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital_onco.Data;
using Hospital_onco.Models;

namespace Hospital_onco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvestigationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InvestigationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Investigation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Investigation>>> GetInvestigations()
        {
            return await _context.Investigations.ToListAsync();
        }

        // GET: api/Investigation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Investigation>> GetInvestigation(int id)
        {
            var investigation = await _context.Investigations.FindAsync(id);

            if (investigation == null)
            {
                return NotFound();
            }

            return investigation;
        }

        // PUT: api/Investigation/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvestigation(int id, Investigation investigation)
        {
            if (id != investigation.Id)
            {
                return BadRequest();
            }

            _context.Entry(investigation).State = EntityState.Modified;

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
        public async Task<ActionResult<Investigation>> PostInvestigation(Investigation investigation)
        {
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
