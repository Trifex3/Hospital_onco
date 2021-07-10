using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels.Stats
{
	public class PopularInvestigationViewModel
	{
		public int InvestigationId { get; set; }
		public string InvestigationName { get; set; }
		public decimal OccupancyPercentage { get; set; }
	}
}
