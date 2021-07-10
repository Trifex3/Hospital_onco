using Hospital_onco.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels
{
    public class ScheduledInvestigationViewModel
    {

		public int Id { get; set; }

		public string Description { get; set; }

		public Investigation Investigation { get; set; }

		public int InvestigationId { get; set; }

		public Doctor Doctor { get; set; }

		public int DoctorId { get; set; }

		private DateTime startDate;

		public DateTime StartTime { get => startDate; set => startDate = DateTime.SpecifyKind(value, DateTimeKind.Utc); }

		private DateTime endDate;

		public DateTime EndTime { get => endDate; set => endDate = DateTime.SpecifyKind(value, DateTimeKind.Utc); }

		public int Capacity { get; set; }

		public int TimezoneOffsetMinutes { get; set; }

	}
}
