using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital_onco.Data;
using Hospital_onco.Models;
using Microsoft.AspNetCore.Hosting;
using AutoMapper;
using Hospital_onco.ViewModels;

namespace Hospital_onco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IMapper _mapper;

        public DoctorController(ApplicationDbContext context, IMapper mapper, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
              _mapper = mapper;
            webHostEnvironment = hostEnvironment;
        }

        // POST: 
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Doctor>> PostDoctor(DoctorWithInvestigationsViewModel doctor)
        {
            if (ModelState.IsValid)
            {
                var doctorEntity = _mapper.Map<Doctor>(new Doctor());
                doctorEntity.Id = doctor.Id;
                doctorEntity.FirstName = doctor.FirstName;
                doctorEntity.LastName = doctor.LastName;
                doctorEntity.Description = doctor.Description;

                if (doctor.Investigations.Count != 0)
                {
                    List<Investigation> investigations = new List<Investigation>();
                    doctor.Investigations.ForEach(investigationId =>
                    {
                        var investigation = _context.Investigations.Find(investigationId);
                        if (investigation != null)
                        {
                            investigations.Add(investigation);
                        }
                    });

                    if (investigations.Count == 0)
                    {
                        return BadRequest("The investigation you provided are not available.");
                    }
                    doctorEntity.Investigations = investigations;
                }

                //string uniqueFileName = UploadedFile(model);
                _context.Doctors.Add(doctorEntity);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetDoctor", new { id = doctor.Id }, doctor);
            }
            return BadRequest(ModelState);
        }

        // GET: api/Doctor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorViewModel>>> GetDoctors()
        {
            
            return await _context.Doctors
              .OrderBy(d => d.LastName)
              .Include(d => d.Investigations)
              .Select(d => _mapper.Map<DoctorViewModel>(d))
              .ToListAsync();
        }

        // GET: api/Doctor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorViewModel>> GetDoctor(int id)
        {
            var doctor = await _context.Doctors.Include(d => d.Investigations).FirstOrDefaultAsync(d => d.Id == id);

            if (doctor == null)
            {
                return NotFound();
            }

            return _mapper.Map<DoctorViewModel>(doctor);
        }

        // PUT: api/Doctor/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctor(DoctorWithInvestigationsViewModel doctorFromUi)
        {
            var doctorToUpdate = _context.Doctors
                 .Include(d => d.Investigations)
                 .FirstOrDefault(t => t.Id == doctorFromUi.Id);

            if (doctorToUpdate == null)
            {
                return NotFound();
            }

            if (doctorFromUi.Investigations.Count != 0)
            {
                var investigationsToRemove = doctorToUpdate.Investigations.ToList();
                investigationsToRemove.ForEach(investigation =>
                {
                    if (!doctorFromUi.Investigations.Contains(investigation.Id))
                    {
                        doctorToUpdate.Investigations.Remove(investigation);
                    }
                });
                doctorFromUi.Investigations.ForEach(investigationId =>
                {
                    var investigationToAdd = _context.Investigations.Find(investigationId);
                    if (investigationToAdd != null && !doctorToUpdate.Investigations.Exists(a => a.Id == investigationToAdd.Id))
                    {
                        doctorToUpdate.Investigations.Add(investigationToAdd);
                    }
                });
            }
            else
            {
                doctorToUpdate.Investigations.Clear();
            }
            var newInvestigation = doctorToUpdate.Investigations;

            doctorToUpdate.Id = doctorFromUi.Id;
            doctorToUpdate.FirstName = doctorFromUi.FirstName;
            doctorToUpdate.LastName = doctorFromUi.LastName;
            doctorToUpdate.Description = doctorFromUi.Description;
            doctorToUpdate.Investigations = newInvestigation;

            _context.Entry(doctorToUpdate).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
    }
            
        
        
        // POST: api/Doctor
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       //     [HttpPost]
       // public async Task<ActionResult<Doctor>> PostDoctor(Doctor doctor)
       // {
       //     _context.Doctors.Add(doctor);
       //     await _context.SaveChangesAsync();

       //     return CreatedAtAction("GetDoctor", new { id = doctor.Id }, doctor);
       // }

        // DELETE: api/Doctor/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctor(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }

            _context.Doctors.Remove(doctor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DoctorExists(int id)
        {
            return _context.Doctors.Any(e => e.Id == id);
        }
    }
}
