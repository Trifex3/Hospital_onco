using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital_onco.Data;
using Hospital_onco.Models;
using Microsoft.AspNetCore.Identity;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Hospital_onco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public AppointmentController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Appointment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        // GET: api/Appointment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            return appointment;
        }

        [HttpGet("ScheduledInvestigation/{scheduledInvestigationId}")]
        [Authorize(AuthenticationSchemes = "Identity.Application,Bearer")]
        public async Task<ActionResult<Appointment>> GetUserAppointment(int scheduledInvestigationId)
        {
            var user = await _userManager.FindByNameAsync(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var appointmnet = await _context.Appointments.Where(a => a.UserId == user.Id && a.ScheduledInvestigationId == scheduledInvestigationId).FirstOrDefaultAsync();

            if (appointmnet == null)
            {
                return new EmptyResult();
            }

            return appointmnet;
        }

        [HttpPost("AppointmnetSpot")]
        [Authorize(AuthenticationSchemes = "Identity.Application,Bearer")]
        public async Task<ActionResult<Appointment>> BookSpot(ScheduledInvestigation investigation)
        {
            var user = await _userManager.FindByNameAsync(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var appointment = new Appointment { ScheduledInvestigationId = investigation.Id, UserId = user.Id };

            _context.Appointments.Add(appointment);
            investigation.Capacity--;
            _context.Entry(investigation).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppointment", new { id = appointment.Id }, appointment);
        }

        [HttpGet("/Appointments/Current")]
        [Authorize(AuthenticationSchemes = "Identity.Application,Bearer")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetBookingsForCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (user == null)
            {
                return new List<Appointment>();
            }

            return await _context.Appointments
                .Where(a => a.UserId == user.Id)
                .ToListAsync();
        }

        // PUT: api/Appointment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /* [HttpPut("{id}")]
         public async Task<IActionResult> PutAppointment(int id, Appointment appointment)
         {
             if (id != appointment.Id)
             {
                 return BadRequest();
             }

             _context.Entry(appointment).State = EntityState.Modified;

             try
             {
                 await _context.SaveChangesAsync();
             }
             catch (DbUpdateConcurrencyException)
             {
                 if (!AppointmentExists(id))
                 {
                     return NotFound();
                 }
                 else
                 {
                     throw;
                 }
             }

             return NoContent();
         }*/

        // POST: api/Appointment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /* [HttpPost]
         public async Task<ActionResult<Appointment>> PostAppointment(Appointment appointment)
         {
             _context.Appointments.Add(appointment);
             await _context.SaveChangesAsync();

             return CreatedAtAction("GetAppointment", new { id = appointment.Id }, appointment);
         }*/

        // DELETE: api/Appointment/5
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = "Identity.Application,Bearer")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var user = await _userManager.FindByNameAsync(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (user == null)
            {
                return NotFound();
            }

            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound();
            }

            _context.Appointments.Remove(appointment);
            var investigation = _context.ScheduledInvestigations.Find(appointment.ScheduledInvestigationId);
            investigation.Capacity++;
            _context.Entry(investigation).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
