import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject } from '@angular/core';
/*import { Appointment } from '../appointments/shared/appointment.model';*/
import { Appointment } from '../../appointments/shared/appointments.model'

@Injectable({
  providedIn: 'root'
})

export class AppointmentComponentService {
  private apiUrl;

  constructor(private httpClient: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private getApiUrl() {
    return this.apiUrl + 'appointments';
  }

  bookSpot(scheduledInvestigation): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.getApiUrl() + '/BookSpot', scheduledInvestigation);
  }

  cancelAppointment(appointment): Observable<{}> {
    return this.httpClient.delete<Appointment>(this.getApiUrl() + '/' + appointment.id);
  }

  getAppointmentForCurrentUserAndInvestigation(scheduledInvestigation): Observable<Appointment> {
    return this.httpClient.get<Appointment>(this.getApiUrl() + '/ScheduledInvestigation/' + scheduledInvestigation.id);
  }
}
