using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels.Stats
{
	public class AppointmentScheduledInvestigationViewModel
	{
		public string InvestigationName { get; set; }

		public string DoctorName { get; set; }

		public DateTime StartTime { get; set; }

		public DateTime EndTime { get; set; }
		public decimal Price { get; set; }
		public int RemainingSpots { get; set; }
		public int BookedSpots { get; set; }
	}
}
