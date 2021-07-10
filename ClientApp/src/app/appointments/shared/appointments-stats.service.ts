import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppointmentStatsComponentService {
  private apiUrl;

  constructor(private httpClient: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private getApiUrl() {
    return this.apiUrl + 'appointmentstats';
  }

  getAppointmentScheduledInvestigationsStats(): Observable<any> {
    return this.httpClient.get<any>(this.getApiUrl());
  }

  getPopularInvestigationsStats(): Observable<any> {
    return this.httpClient.get<any>(this.getApiUrl() + "/PopularInvestigations");
  }

  getPopularDoctorsStats(): Observable<any> {
    return this.httpClient.get<any>(this.getApiUrl() + "/PopularDoctors");
  }
}
