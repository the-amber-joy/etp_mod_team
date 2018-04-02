import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Offender } from './offender.model';
import { Note } from "../shared/note.model";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { OffenderService } from "./offender.service";
import { AppModule } from '../app.module';
import { MatSelectChange } from '@angular/material';



@Component({
    selector: 'offenders-component',
    templateUrl: './offender.component.html',
    styleUrls: ['./offender.component.css']
})
export class OffenderComponent implements OnInit, AppModule {

    constructor() { 
            // this.getFromUrl('http://catpicture.com').subscribe(value => {
    //     // do something
    //     },
    //     error => {
    //         // handle error here
    //     });
    }
    @Output()
    selectionChange: EventEmitter<MatSelectChange>

    isCollapsed: boolean;
    offenders: Offender[];
    offender: Offender;
    today: string;
    copyright: Number;

    ngOnInit() {
        this.today = new Date().toString();
        this.copyright = new Date().getFullYear();

        this.offender = new Offender();
        this.offender.firstName = 'Guy';
        this.offender.lastName = 'Surname'
        this.offender.score = 6;
        this.offender.dateAdded = new Date('October 4 2017');
        this.offender.lastUpdated = new Date();
        this.offender.notes = 'These are the Admin notes';
        this.offender.banStatus = this.offender.score == 10;
        // this.offenders = OffenderService.getList(): Observable < Offender > {
        //     return this.httpClient.get('/api/people');
        // return an array of typed objects to iterate through
        // }
    }

    doSomething($event: EventEmitter<MatSelectChange>) {
        this.offender.banStatus = this.offender.score == 10;
    }


}