using Hospital_onco.Data;
using Hospital_onco.Models;
using Hospital_onco.ViewModels;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Validator
{
    public class InvestigationValidator : AbstractValidator<InvestigationViewModel>
    {
        private readonly ApplicationDbContext _context;

        public InvestigationValidator(ApplicationDbContext context)
        {
            _context = context;

            RuleFor(m => m.Name).MinimumLength(1).MaximumLength(50);
            RuleFor(m => m.Description).MinimumLength(10).MaximumLength(150).WithMessage($"The description must be between 10 and 150 characters long.");
            RuleFor(m => m.Type).Must(IsAValidInvestigationType);
            RuleFor(m => m.RiskLevel).InclusiveBetween(1, 5).WithMessage("The risk level must be between 1 and 5.");
            /*RuleFor(m => m.ActivityPicture).MinimumLength(4).When(m => !string.IsNullOrEmpty(m.ActivityPicture));
            RuleFor(m => m.PrimaryColour).Must(IsAValidHexCode);
            RuleFor(m => m.SecondaryColour).Must(IsAValidHexCode);*/
        }

        /*private bool IsAValidHexCode(string val)
        {
            int res = 0;
            if (int.TryParse(val,
                     System.Globalization.NumberStyles.HexNumber,
                     System.Globalization.CultureInfo.InvariantCulture, out res))
                return true;
            else
                return false;
        }*/

        private bool IsAValidInvestigationType(InvestigationType investigationType)
        {
            if (Enum.IsDefined(typeof(InvestigationType), investigationType) == true)
                return true;
            else
                return false;
        }
    }
}
