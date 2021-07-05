using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Models
{
    public class Appointment
    {

		public int Id { get; set; }

		public ScheduledInvestigation ScheduledInvestigation { get; set; }

		public int ScheduledInvestigationId { get; set; }

		public ApplicationUser User { get; set; }

		public string UserId { get; set; }
	}
}
