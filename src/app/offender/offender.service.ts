import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Admin } from '../shared/admin.model';

@Injectable()
export class OffenderService {

  constructor(private httpClient: HttpClient) {}

//   getPersonList(): Observable<any> {
//     return this.httpClient.get('/api/people');
//   }

  getList(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

}