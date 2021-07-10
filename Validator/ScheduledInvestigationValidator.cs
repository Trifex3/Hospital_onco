using Hospital_onco.Data;
using FluentValidation;
using Hospital_onco.ViewModels;
using System;
using System.Linq;

namespace Hospital_onco.Validator
{
	public class ScheduledInvestigationValidator : AbstractValidator<ScheduledInvestigationViewModel>
	{
		private readonly ApplicationDbContext _context;

		public ScheduledInvestigationValidator(ApplicationDbContext context)
		{
			_context = context;

			RuleFor(m => m.Capacity).GreaterThan(0);
			RuleFor(m => m.InvestigationId).NotNull().WithMessage("You must specify an investigation.");
			RuleFor(m => m.InvestigationId).NotEqual(0).WithMessage("You must specify an investigation.");
			RuleFor(m => m.DoctorId).NotNull().WithMessage("You must specify a Doctor.");
			RuleFor(m => m.DoctorId).NotEqual(0).WithMessage("You must specify a Doctor.");
			RuleFor(m => m.StartTime).NotNull();
			RuleFor(m => m.EndTime).NotNull();
			RuleFor(m => m.StartTime).LessThan(m => m.EndTime).WithMessage("The start time must be earlier than the end time.");
			RuleFor(m => m.StartTime).GreaterThan(DateTime.UtcNow).WithMessage("The start time must be in the future.");
			RuleFor(m => m.StartTime.AddMinutes(-m.TimezoneOffsetMinutes)).Must(BeWithinBusinessHours).WithMessage("Events must start within business hours (9-19).");
			RuleFor(m => m.EndTime.AddMinutes(-m.TimezoneOffsetMinutes)).Must(BeWithinBusinessHours).WithMessage("Events must end within business hours (9-19).");
			RuleFor(m => new { m.StartTime, m.EndTime }).Must(x => !HaveOverlappingEvents(x.StartTime, x.EndTime)).WithMessage("This event overlaps with a different one.");	
		}

		private bool BeWithinBusinessHours(DateTime datetime)
		{
			return datetime.Hour >= 9 && datetime.Hour < 19;
		}

		private bool HaveOverlappingEvents(DateTime startTime, DateTime endTime)
		{
			var overlappingInvestigationsCount = _context.ScheduledInvestigations
				.Where(a => a.StartTime >= startTime && a.StartTime <= endTime || a.EndTime >= startTime && a.EndTime <= endTime)
				.Count();

			return overlappingInvestigationsCount > 0;
		}
	}
}
