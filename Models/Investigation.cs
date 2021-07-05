using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Models
{
 
        public enum InvestigationType
        {
            CT,
            Appointmnet,
            Biology,
            Surgery,
            Biopsy,
            RTE,
            Ultrasound
        }
        public class Investigation
        {

            [Key]
            public int Id { get; set; }

            public string Name { get; set; }

            public string Description { get; set; }

            public InvestigationType Type { get; set; }


            public int RiskLevel { get; set; }

        public List<Doctor> Doctors { get; set; }


    }
    
}

