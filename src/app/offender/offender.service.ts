import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Offender } from '../shared/offender.model';
import { Note } from '../shared/note.model';
import { Admin } from '../shared/admin.model';

let api = '';
if (process.env.NODE_ENV == 'local') {
    api = environment.api;
}

@Injectable()
export class OffenderService {

    offender: Offender;
    offenders: Offender[];
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Offender[]> {
        console.log("env:", process.env.NODE_ENV);
        console.log("env api:", process.env.API);
        console.log("angular api:", environment.api)
        return this.httpClient.get<Offender[]>(api + '/api/offenders');
    }

    postNew(body: {offender: Offender}): Observable<Offender> {
        return this.httpClient.post<Offender>(api + '/api/offender', body);
    }

    updateStatus(body: {
        _id: number,
        notes: Note[],
        points: number,
        isBanned: boolean,
        updated: Date,
        updatedBy: Admin,
        bannedBy: Admin,
        dateBanned: Date,
        fbLink: string
    }): Observable<Offender> {
        return this.httpClient.put<Offender>(api + '/api/update', body);
    }

    editName(body: {
        _id: number,
        name: string,
        updated: Date,
        updatedBy: Admin,
    }): Observable<Offender> {
        return this.httpClient.put<Offender>(api + '/api/edit', body);
    }
}
