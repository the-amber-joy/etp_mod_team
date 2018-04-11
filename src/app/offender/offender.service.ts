import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offender } from "../shared/offender.model";
import { Admin } from '../shared/admin.model';
import { Note } from '../shared/note.model';

@Injectable()
export class OffenderService {

  offender: Offender;
  offenders: Offender[];
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Offender[]> {
    return this.httpClient.get<Offender[]>('/api/offenders')
  }

  postNew(body: {offender: Offender}): Observable<Offender> {
    return this.httpClient.post<Offender>('/api/offenders', body)
  }

  updateStatus(body: { _id: number, notes: Note[], points: number, originalPoints: number, isBanned: boolean, originalStatus: boolean, updated: Date }): Observable<Offender>{
    return this.httpClient.put<Offender>('/api/update', body )
  }
}