using Hospital_onco.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels
{
    public class AppointmentViewModel
    {


		public int Id { get; set; }

		public ScheduledInvestigation ScheduledInvestigation { get; set; }

		public int ScheduledInvestigationId { get; set; }

		public ApplicationUserViewModel User { get; set; }

		public string UserId { get; set; }

	}
}
