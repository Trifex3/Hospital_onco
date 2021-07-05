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
    public class ScheduledInvestigationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ScheduledInvestigationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ScheduledInvestigation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ScheduledInvestigation>>> GetScheduledInvestigations()
        {
            return await _context.ScheduledInvestigations.ToListAsync();
        }

        // GET: api/ScheduledInvestigation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ScheduledInvestigation>> GetScheduledInvestigation(int id)
        {
            var scheduledInvestigation = await _context.ScheduledInvestigations.FindAsync(id);

            if (scheduledInvestigation == null)
            {
                return NotFound();
            }

            return scheduledInvestigation;
        }

        // PUT: api/ScheduledInvestigation/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutScheduledInvestigation(int id, ScheduledInvestigation scheduledInvestigation)
        {
            if (id != scheduledInvestigation.Id)
            {
                return BadRequest();
            }

            _context.Entry(scheduledInvestigation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ScheduledInvestigationExists(id))
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

        // POST: api/ScheduledInvestigation
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ScheduledInvestigation>> PostScheduledInvestigation(ScheduledInvestigation scheduledInvestigation)
        {
            _context.ScheduledInvestigations.Add(scheduledInvestigation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetScheduledInvestigation", new { id = scheduledInvestigation.Id }, scheduledInvestigation);
        }

        // DELETE: api/ScheduledInvestigation/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteScheduledInvestigation(int id)
        {
            var scheduledInvestigation = await _context.ScheduledInvestigations.FindAsync(id);
            if (scheduledInvestigation == null)
            {
                return NotFound();
            }

            _context.ScheduledInvestigations.Remove(scheduledInvestigation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ScheduledInvestigationExists(int id)
        {
            return _context.ScheduledInvestigations.Any(e => e.Id == id);
        }
    }
}
