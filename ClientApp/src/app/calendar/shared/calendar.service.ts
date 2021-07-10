import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Inject } from '@angular/core';
import { ScheduledInvestigation } from './calendar.model';

@Injectable({
  providedIn: 'root'
})

export class CalendarComponentService {
  private apiUrl;

  constructor(private httpClient: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private getApiUrl() {
    return this.apiUrl + 'scheduledinvestigations';
  }

  getScheduledInvestigations(): Observable<ScheduledInvestigation[]> {
    return this.httpClient
      .get<ScheduledInvestigation[]>(this.getApiUrl());
  }

  saveScheduledInvestigation(investigation: ScheduledInvestigation): Observable<ScheduledInvestigation> {
    investigation.timeZoneOffsetMinutes = new Date().getTimezoneOffset();
    return this.httpClient.post<ScheduledInvestigation>(this.getApiUrl(), investigation);
  }

  updateScheduledInvestigation(investigation: ScheduledInvestigation) {
    return this.httpClient.put(this.getApiUrl() + '/' + investigation.id, investigation);
  }

  deleteScheduledInvestigation(investigation: ScheduledInvestigation) {
    return this.httpClient.delete(this.getApiUrl() + '/' + investigation.id);
  }
}
