import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Admin } from './admin.model';

var api = environment.api;

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string) {
        return this.httpClient.post<any>(api + '/users/login', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
                }
                return user;
            })
    }

    logOut() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }

    updateUser(user: Admin, password: string) {
        return this.httpClient.put<any>(api + '/users/update', { user: user, password: password });
    }

    getAll(): Observable<Admin[]> {
        return this.httpClient.get<Admin[]>(api + '/users/getAll')
    }

}