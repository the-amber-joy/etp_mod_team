import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Admin } from '../shared/admin.model';

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