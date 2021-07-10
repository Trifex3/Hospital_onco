using Hospital_onco.Models;
using Hospital_onco.Models.Stats;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Investigation> Investigations { get; set; }

        public DbSet<ApplicationUser> Users { get; set; }



        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<ScheduledInvestigation> ScheduledInvestigations { get; set; }

        public DbSet<UserRole> Roles { get; set; }

        public DbSet<Appointment> Appointments { get; set; }

        public DbSet<AppointmentScheduledInvestigation> AppointmentScheduledInvestigations { get; set; }
        public DbSet<PopularInvestigation> PopularInvestigations { get; set; }
        public DbSet<PopularDoctor> PopularDoctors { get; set; }

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
  
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ScheduledInvestigation>().Property(s => s.InvestigationId).IsRequired();
            modelBuilder.Entity<ScheduledInvestigation>().Property(s => s.DoctorId).IsRequired();
            modelBuilder.Entity<ScheduledInvestigation>().Property(s => s.StartTime).IsRequired();
            modelBuilder.Entity<ScheduledInvestigation>().Property(s => s.EndTime).IsRequired();
            
            modelBuilder.Entity<ScheduledInvestigation>().Property(s => s.Capacity).IsRequired();

            modelBuilder.Entity<Appointment>()
                .HasIndex(a => new { a.UserId, a.ScheduledInvestigationId })
                .IsUnique();

            modelBuilder.Entity<UserRole>()
                .HasData(new UserRole { Name = UserRole.ROLE_USER, NormalizedName = UserRole.ROLE_USER.ToUpper() },
                         new UserRole { Name = UserRole.ROLE_ADMIN, NormalizedName = UserRole.ROLE_ADMIN.ToUpper() });

            modelBuilder.Entity<Investigation>().Property(i => i.Id).IsRequired();
            modelBuilder.Entity<Investigation>().Property(i => i.Name).IsRequired();
            modelBuilder.Entity<Investigation>().Property(i => i.Description).IsRequired();
            modelBuilder.Entity<Investigation>().Property(i => i.Type).IsRequired();
            modelBuilder.Entity<Investigation>().Property(i => i.RiskLevel).IsRequired();
          
            modelBuilder.Entity<Doctor>().Property(d => d.FirstName).IsRequired();
            modelBuilder.Entity<Doctor>().Property(d => d.LastName).IsRequired();
            modelBuilder.Entity<Doctor>().Property(d => d.Description).IsRequired();
        }
    }
}
