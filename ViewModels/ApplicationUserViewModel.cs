using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hospital_onco.ViewModels
{
    public class ApplicationUserViewModel
    {
        public string Id { get; set; }

        public IList<string> Roles { get; set; } = new List<string>();

        [Required]
        public String FirstName { get; set; }
        [Required]
        public String LastName { get; set; }
        [Display(Name = "Birth date")]
        [DataType(DataType.Date)]
        public DateTime? BirthDate { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public enum GenderType
        {
            NOT_SPECIFIED,
            [Display(Name = "Female")]
            FEMALE,
            [Display(Name = "Male")]
            MALE,
            [Display(Name = "Other")]
            OTHER
        }
        public string Email { get; set; }
        public string UserName { get; set; }
       
       
        public string PlainPassword { get; set; }
       
        public GenderType? Gender { get; set; }
    }


}

   