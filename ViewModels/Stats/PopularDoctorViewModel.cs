using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FHospital_onco.ViewModels.Stats
{
	public class PopularDoctorViewModel
	{
		public int DoctorId { get; set; }

		public string DoctorName { get; set; }

		public decimal OccupancyPercentage { get; set; }
	}
}
