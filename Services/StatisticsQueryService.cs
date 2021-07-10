using Hospital_onco.Data;
using Hospital_onco.Models.Stats;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Services
{
	public class StatisticsQueryService
	{
		private readonly ApplicationDbContext _context;

		public StatisticsQueryService(ApplicationDbContext context)
		{
			_context = context;
		}

		public async Task<List<AppointmentScheduledInvestigation>> getAppointmentScheduledInvestigationsStatsAsync(int daysAhead)
		{
			var sql = "SELECT (SELECT CONCAT(Doctors.FirstName, ' ', Doctors.LastName) FROM Doctors WHERE Doctors.Id = ScheduledInvestigations.TrainerId) AS DoctorName, " +
				"(SELECT Investigations.Name FROM Investigations WHERE Investigations.Id = ScheduledInvestigations.InvestigationId) AS InvestigationName, " +
				"CASE WHEN AppointmentSpots IS NULL THEN 0 ELSE AppointmentSpots END AS AppointmentSpots, " +
				"CASE WHEN AppointmentSpots IS NOT NULL THEN ScheduledInvestigations.Capacity ELSE ScheduledInvestigations.Capacity END AS RemainingSpots, " +
				" ScheduledInvestigations.Price, ScheduledInvestigations.StartTime, ScheduledInvestigations.EndTime " +
				"FROM ScheduledInvestigations " +
				"LEFT JOIN(SELECT Appointments.ScheduledInvestigationId, COUNT(*) AS AppointmentSpots " +
				"FROM Appointments GROUP BY Appointments.ScheduledInvestigationId) AS AppointmentsTable " +
				"ON AppointmentsTable.ScheduledInvestigationId = ScheduledInvestigations.Id " +
				"WHERE ScheduledInvestigations.StartTime >= '" + DateTime.UtcNow + "' " +
				"AND ScheduledInvestigations.StartTime <= '" + DateTime.UtcNow.AddDays(daysAhead) + "' " +
				"ORDER BY ScheduledInvestigations.StartTime";

			return await _context.AppointmentScheduledInvestigations.FromSqlRaw(sql).ToListAsync();
		}

		public async Task<List<PopularInvestigation>> getPopularInvestigationsStatsAsync()
		{
			var sql = "SELECT TOP 10 InvestigationId, " +
				"(SELECT Investigations.Name FROM Investigations WHERE Investigations.Id = InvestigationId) AS InvestigationName, " +
				"CAST(CONVERT(DECIMAL(16,2), SUM(AppointmentSpots)) / CONVERT(DECIMAL(16,2), SUM(capacity) + SUM(AppointmentSpots)) * 100 AS DECIMAL(16,2)) AS OccupancyPercentage " +
				"FROM ScheduledInvestigations " +
				"INNER JOIN (SELECT ScheduledInvestigationId, COUNT(*) AS AppointmentSpots " +
				"FROM Appointments " +
				"GROUP BY ScheduledInvestigationId) AS AppointmentsCount " +
				"ON ScheduledInvestigations.Id = AppointmentsCount.ScheduledInvestigationId " +
				"GROUP BY InvestigationId " +
				"ORDER BY OccupancyPercentage DESC";

			return await _context.PopularInvestigations.FromSqlRaw(sql).ToListAsync();
		}

		public async Task<List<PopularDoctor>> getPopularDoctorsStatsAsync()
		{
			var sql = "SELECT TOP 10 DoctorId, " +
				"(SELECT CONCAT(Doctors.FirstName, ' ', Doctors.LastName) FROM Doctors WHERE Doctors.Id = DoctorId) AS DoctorName, " +
				"CAST(CONVERT(DECIMAL(16,2), SUM(AppointmentSpots)) / CONVERT(DECIMAL(16,2), SUM(capacity) + SUM(BookedSpots)) * 100 AS DECIMAL(16,2)) AS OccupancyPercentage " +
				"FROM ScheduledInvestigations " +
				"INNER JOIN (SELECT ScheduledInvestigationId, COUNT(*) AS AppointmentSpots " +
				"FROM Appointments " +
				"GROUP BY ScheduledInvestigationId) AS AppointmentsCount " +
				"ON ScheduledInvestigations.Id = AppointmentsCount.ScheduledInvestigationId " +
				"GROUP BY DoctorId " +
				"ORDER BY OccupancyPercentage DESC";

			return await _context.PopularDoctors.FromSqlRaw(sql).ToListAsync();
		}
	}
}
