using Hospital_onco.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels
{
    public class InvestigationViewModel
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public InvestigationType Type { get; set; }


        public int RiskLevel { get; set; }
    }
}
