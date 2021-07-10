import { ChangeDetectorRef, Component, Inject, Injectable, OnInit } from '@angular/core';

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
import { endOfHour } from 'date-fns/esm';
import { Investigation } from '../../../investigations/shared/investigation.model';
import { InvestigationComponentService } from '../../../investigations/shared/investigation.service';
import { ScheduledInvestigation } from '../../shared/calendar.model';
import { CalendarComponentService } from '../../shared/calendar.service';

@Component({
  selector: 'app-scheduled-investigations',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCalendarComponent implements OnInit {
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
  errorMessages = [];

  constructor(
    private cd: ChangeDetectorRef,
    private modal: NgbModal,
    private service: CalendarComponentService,
    private investigationService: InvestigationComponentService) {
  }

  ngOnInit() {
    this.service.getScheduledInvestigations()
      .subscribe(result => {
        for (let item of result) {
          this.events = [
            ...this.events,
            this.createEventFromScheduledInvestigation(item)
          ];
        }

        this.cd.detectChanges();
      }, error => console.error(error));
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        if (event.start < new Date()) {
          return;
        }

        this.openModal(event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        if (event.start < new Date()) {
          return;
        }

        this.deleteEvent(event);
      },
    },
  ];

  events: CalendarEvent<ScheduledInvestigation>[] = [];

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    if (newStart < new Date()) {
      return;
    }

    const overlappingEvents = this.events.filter((otherEvent) => {
      if (event.meta.id === otherEvent.meta.id) {
        return false;
      }

      return this.intervalsOverlap(newStart, newEnd, otherEvent.start, otherEvent.end);
    });

    if (overlappingEvents.length > 0) {
      return;
    }

    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });

    event.meta.startTime = newStart;
    event.meta.endTime = newEnd;
    this.saveEvent(event);
  }

  intervalsOverlap(start: Date, end: Date, otherStart: Date, otherEnd: Date): boolean {
    return start >= otherStart && start <= otherEnd ||
      end >= otherStart && end <= otherEnd;
  }

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  modalData: {
    event: CalendarEvent;
    options: {
      availableInvestigations?: Investigation[]
      availableDoctors?: any
    };
  };

  openModal(event: CalendarEvent): void {
    this.investigationService.getInvestigations()
      .subscribe(result => {

        this.modalData = {
          "event": event,
          "options": {
            "availableInvestigations": result
          }
        };

        if (event.meta && event.meta.doctor) {
          this.modalData.options.availableDoctors = [ event.meta.doctor ];
        }

        this.modal.open(this.modalContent, { size: 'lg' });
      }, error => console.error(error));
  }

  hourSegmentClicked(date: Date) {
    this.selectedDayViewDate = date;

    if (date < new Date()) {
      return;
    }

    let event: CalendarEvent = {
      title: 'New event',
      start: date,
      end: endOfHour(date),
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    }

    let scheduledInvestigation: ScheduledInvestigation = {
      "startTime": event.start,
      "endTime": endOfHour(date),
      "investigation": {},
      "doctor": {}
    }

    event.meta = scheduledInvestigation;

    this.openModal(event);
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.service.deleteScheduledInvestigation(eventToDelete.meta)
      .subscribe(result => {
        this.events = this.events.filter((event) => event !== eventToDelete);
        this.cd.detectChanges();
      }, error => console.error(error));
  }

  addEvent(eventToAdd: CalendarEvent): void {
    this.events = [
      ... this.events,
      eventToAdd
    ];
  }

  createEventFromScheduledInvestigation(scheduledInvestigation: ScheduledInvestigation) {
    const event: CalendarEvent = {
      title: scheduledInvestigation.investigation.name,
      start: new Date(scheduledInvestigation.startTime),
      end: new Date(scheduledInvestigation.endTime),
      actions: this.actions,
      /*color: { primary: scheduledInvestigation.investigation.primaryColour, secondary: scheduledInvestigation.investigation.secondaryColour },*/
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      meta: scheduledInvestigation
    };

    return event;
  }


  saveEvent(eventToSave: CalendarEvent) {
    this.errorMessages = [];

    if (eventToSave.meta.id) {
      this.service.updateScheduledInvestigation(eventToSave.meta)
        .subscribe(result => {
          this.cd.detectChanges();
          this.modal.dismissAll();
        }, error => {
          this.errorMessages = error.error.errors;
          this.cd.detectChanges();
        });

      return;
    }


    this.service.saveScheduledInvestigation(eventToSave.meta)
      .subscribe(result => {
        const event = this.createEventFromScheduledInvestigation(result);
        this.addEvent(event);
        this.cd.detectChanges();
        this.modal.dismissAll();
      }, error => {
        this.errorMessages = error.error.errors;
        this.cd.detectChanges();
      });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  filterDoctors(investigationId) {
    const investigation = this.modalData.options.availableInvestigations.find(o => o.id == investigationId);

    if (investigation === undefined) {
      this.modalData.options.availableDoctors = [];
    } else {
      this.modalData.options.availableDoctors = investigation.doctors;
    }

    this.cd.detectChanges();
  }
}
