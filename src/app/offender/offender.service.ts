import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offender } from "../shared/offender.model";
import { Admin } from '../shared/admin.model';
import { Note } from '../shared/note.model';
// import { MOCKDATA } from './MOCKDATA';

@Injectable()
export class OffenderService {

  offenders: Offender[];
  constructor(private httpClient: HttpClient) { }

  // getAll(): Offender[] {
  //   return MOCKDATA;
  // }

  getAll(): Observable<Offender[]>{
    return this.httpClient.get<Offender[]>('/api/offenders')
  }

  postNew(): Observable<Offender[]> {
    return this.httpClient.get<Offender[]>('/api/offenders')
  }

}