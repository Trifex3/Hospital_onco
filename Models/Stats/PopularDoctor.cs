using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Models.Stats
{
	public class PopularDoctor
	{
		public int DoctorId { get; set; }

		public string DoctorName { get; set; }

		[Column(TypeName = "decimal(18,2)")]
		public decimal OccupancyPercentage { get; set; }
	}
}
