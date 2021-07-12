import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,

} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarView,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr/flatpickr-defaults.service';
import { CalendarComponentService } from './shared/calendar.service';
import { ScheduledInvestigation } from './shared/calendar.model';
import { AppointmentComponentService } from './shared/appointment.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
/*import { Appointment } from '../../appointments/shared/appointment.model';*/
/*import { Appointment } from '../../../../appointments/shared/appointments.model';*/
import { AuthService } from '../auth/auth.service';
import { Appointment } from '../appointments/shared/appointments.model';


@Component({
  selector: 'app-scheduled-investigations',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  activities: ScheduledInvestigation[];

  public startDatePickerOptions: FlatpickrDefaultsInterface = {
    allowInput: true,
    enableTime: true,
    mode: 'single',
    dateFormat: "Y-m-d H:i",
    minDate: 'today',
    altFormat: "F j, Y H:i",
    altInput: true,
    enable: [{ from: new Date(0, 1), to: new Date(new Date().getFullYear() + 200, 12) }],
  }

  public endDatePickerOptions: FlatpickrDefaultsInterface = {
    allowInput: true,
    enableTime: true,
    mode: 'single',
    dateFormat: "Y-m-d H:i",
    minDate: 'today',
    altFormat: "F j, Y H:i",
    altInput: true,
    enable: [{ from: new Date(0, 1), to: new Date(new Date().getFullYear() + 200, 12) }]
  }

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  daysInWeek = 7;
  selectedDayViewDate: Date;
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;
  activeDayIsOpen: boolean = true;
  isAuthenticated: Observable<boolean>;

  constructor(
    private cd: ChangeDetectorRef,
    private modal: NgbModal,
    private service: CalendarComponentService,
    private appointmentService: AppointmentComponentService,
    private authorizeService: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();

    this.service.getScheduledInvestigations()
      .subscribe(result => {
        for (let item of result) {
          this.events = [
            ...this.events,
            {
              title: item.investigation.name,
              start: new Date(item.startTime),
              end: new Date(item.endTime),
             /* color: { primary: item.investigation.primaryColour, secondary: item.activity.secondaryColour },*/
              meta: item
            },
          ];
        }

        this.cd.detectChanges();

      }, error => console.error(error));
  }

  events: CalendarEvent[] = [];

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  modalData: {
    event: CalendarEvent;
  };

  openModal(event: CalendarEvent): void {
    this.appointmentService.getAppointmentForCurrentUserAndInvestigation(event.meta)
      .pipe(
        catchError(error => {
          return of([]);
        })
      )
      .subscribe(result => {
        event.meta.currentAppointment = result;
        this.modalData = { event };
        this.modal.open(this.modalContent, { size: 'lg' });
        this.cd.detectChanges();

      }, error => error => console.error(error));
  }

  userHasAppointment(event: CalendarEvent) {
    return event.meta.currentAppointment != undefined &&
      event.meta.currentAppointment != null &&
      Object.keys(event.meta.currentAppointment).length > 0;
  }

  eventHasCapacity(event: CalendarEvent) {
    return event.meta.capacity > 0;
  }

  eventCanBeAppointment(event: CalendarEvent) {
    return !this.userHasAppointment(event) && this.eventHasCapacity(event) && event.start > new Date();
  }

  eventAppointmentCanBeCanceled(event: CalendarEvent) {
    return this.userHasAppointment(event) && event.start > new Date();
  }

  appointmentEvent(event: CalendarEvent): void {
    this.appointmentService.bookSpot(event.meta)
      .subscribe(result => {
        event.meta.currentAppointment = result;
        event.meta.capacity--;
        this.modalData = { event };
        this.cd.detectChanges();
      }, error => console.error(error));
  }

  cancelEventAppointment(event: CalendarEvent): void {
    this.appointmentService.cancelAppointment(event.meta.currentAppointment)
      .subscribe(result => {
        event.meta.currentAppointment = null;
        event.meta.capacity++;
        this.modalData = { event };
        this.cd.detectChanges();
      }, error => console.error(error));
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
