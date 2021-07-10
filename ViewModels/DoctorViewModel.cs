using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels
{
    public class DoctorViewModel
    {
        public int Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Description { get; set; }

        public List<InvestigationViewModel> Investigations { get; set; }

    }
}
