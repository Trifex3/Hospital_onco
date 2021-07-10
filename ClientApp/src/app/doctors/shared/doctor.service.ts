import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Investigation } from '../../investigations/shared/investigation.model';
import { Doctor } from './doctor';

@Injectable({providedIn: 'root'})
export class DoctorComponentService {

  constructor(private httpClient: HttpClient, @Inject('API_URL') private apiUrl: string) { }

  getDoctors(): Observable<Doctor.DoctorResponse[]> {
    const url: string = this.getApiUrl();
    return this.httpClient.get<Doctor.DoctorResponse[]>(url);
  }

  getDoctor(id: number): Observable<Doctor.DoctorResponse> {
    const url: string = this.getApiUrl() + '/' + id;
    return this.httpClient.get<Doctor.DoctorResponse>(url);
  }

  getActivities(): Observable<Investigation> {
    const url: string = this.apiUrl + 'investigations';
    return this.httpClient.get<Investigation>(url);
  }

  save(doctor: Doctor.DoctorRequest): Observable<Doctor.DoctorConfirmation> {
    const url: string = this.getApiUrl();
    return this.httpClient.post<Doctor.DoctorConfirmation>(url, doctor);
  }

  update(id: number, doctor: Doctor.DoctorRequest): Observable<Doctor.DoctorConfirmation> {
    const url: string = this.getApiUrl() + '/' + id;
    return this.httpClient.put<Doctor.DoctorConfirmation>(url, doctor);
  }

  delete(id: string): Observable<any> {
    const url: string = this.getApiUrl() +'/' + id;
    return this.httpClient.delete<any>(url);
  }

  private getApiUrl() {
    return this.apiUrl + 'doctors';
  }
}
