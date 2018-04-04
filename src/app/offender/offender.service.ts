import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Offender } from "./offender.model";
import { Admin } from '../shared/admin.model';
import { Note } from '../shared/note.model';
import { MOCKDATA } from './MOCKDATA';

@Injectable()
export class OffenderService {

  constructor(private httpClient: HttpClient) {}

  getOffenders(): Offender[] {
    return MOCKDATA;
  }
//   getPersonList(): Observable<any> {
//     return this.httpClient.get('/api/people');
//   }

  // getList(url: string): Observable<any> {
  //   return this.httpClient.get(url);
  // }

}