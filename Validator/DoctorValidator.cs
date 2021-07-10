using Hospital_onco.Data;
using Hospital_onco.ViewModels;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_onco.Validator
{
    public class DoctorValidator : AbstractValidator<DoctorWithInvestigationsViewModel>
    {
        private readonly ApplicationDbContext _context;

        public DoctorValidator(ApplicationDbContext context)
        {
            _context = context;

            RuleFor(d => d.FirstName).NotNull().NotEmpty().Matches(@"^\S*$").Length(1, 20).WithMessage("The first name should have between 4 and 20 characters.");
            RuleFor(d => d.LastName).NotNull().NotEmpty().Matches(@"^\S*$").Length(1, 20).WithMessage("The last name should have between 4 and 20 characters.");
            RuleFor(d => d.Description).NotNull().NotEmpty().Matches(@"^\S*").Length(1, 50).WithMessage("The description should have between 4 and 50 characters.");
        }
    }
}
