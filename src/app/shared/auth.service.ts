import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin.model';

@Injectable()
export class AuthService {

  user: Admin;
  constructor(private httpClient: HttpClient) { }

  logOut() {
    return this.httpClient.post('/auth/logout', HttpResponse)
  }

}
