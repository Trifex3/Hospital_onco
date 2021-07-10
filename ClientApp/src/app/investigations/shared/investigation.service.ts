import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Investigation } from "./investigation.model";


@Injectable({
  providedIn: 'root'
})

export class InvestigationComponentService {
  private apiUrl;

  constructor(private httpClient: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private getApiUrl() {
    return this.apiUrl + 'investigations';
  }

  public getInvestigations(): Observable<Investigation[]> {
    return this.httpClient.get<Investigation[]>(this.getApiUrl());
  }

  public getInvestigation(id: number): Observable<Investigation> {
    return this.httpClient.get<Investigation>(this.getApiUrl() + '/' + id);
  }

  save(investigation: Investigation): Observable<Investigation> {
    return this.httpClient.post<Investigation>(this.getApiUrl(), investigation);
  }

  update(investigation): Observable<Investigation> {
    const url = `${this.getApiUrl()}/${investigation.id}`;
    return this.httpClient
      .put<Investigation>(url, investigation);
  }

  delete(investigation: Investigation): Observable<Investigation> {
    const url = `${this.getApiUrl()}/${investigation.id}`;
    return this.httpClient
      .delete<Investigation>(url);
  }
}
