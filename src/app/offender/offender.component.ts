import { Component, OnInit, Input, Output, EventEmitter, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Offender } from './offender.model';
import { Note } from "../shared/note.model";
import { Observable } from 'rxjs/Observable';

import { OffenderService } from "./offender.service";
import { AppModule } from '../app.module';
import { MatSelectChange } from '@angular/material';


@Component({
    selector: 'add-new-dialog',
    templateUrl: './add-new.dialog.html',
})
export class AddNewDialog {

    constructor(
        public dialogRef: MatDialogRef<AddNewDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    name: string;

    cancelAdd(): void {
        this.dialogRef.close();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}


@Component({
    selector: 'offenders-component',
    templateUrl: './offender.component.html',
    styleUrls: ['./offender.component.css']
})
export class OffenderComponent implements OnInit, AppModule {
    constructor(public dialog: MatDialog) { }

    // constructor() {
            // this.getFromUrl('http://catpicture.com').subscribe(value => {
    //     // do something
    //     },
    //     error => {
    //         // handle error here
    //     });
    // }
    @Output()
    selectionChange: EventEmitter<MatSelectChange>

    // isCollapsed: boolean;
    offenders: Offender[];
    offender: Offender;
    today: string;

    ngOnInit() {
        this.offenders = [];
        this.today = new Date().toString();

        for (let i = 0; i < 3; i++) {
            this.offender = new Offender();
            this.offender.id = i + 1;
            this.offender.firstName = 'Offender ';
            this.offender.lastName = (i+1).toString();
            this.offender.score = i+5;
            this.offender.dateAdded = new Date("Oct 4 2017");
            this.offender.lastUpdated = new Date();
            this.offender.notes = [];
            this.offender.banStatus = false;

            this.offenders.push(this.offender);
        }

        // this.offenders = OffenderService.getList(): Observable < Offender > {
        //     return this.httpClient.get('/api/people');
        // return an array of typed objects to iterate through
        // }

    }

    newName: string = '';

    doSomething($event: EventEmitter<MatSelectChange>, offender) {
        offender.banStatus = offender.score == 10;
    }

    buttonClicked() {
        alert("This form doesn't do anything yet");
    }


    openDialog(): void {
        let dialogRef = this.dialog.open(AddNewDialog, {
            width: '250px',
            data: { name: this.newName }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
