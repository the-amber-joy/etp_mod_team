import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Route, Resolve } from '@angular/router';
import { Admin } from '../shared/admin.model';
import { UserComponent } from '../user/user.component';

@Injectable()
export class HeaderService {
    userData = new Subject<any>();

    currentUser(data: { show: boolean, user: Admin, currentPage: string }) {
        this.userData.next(data);
    }

    returnUser(): Observable<any> {
        return this.userData.asObservable();
    }

    constructor() { }
}