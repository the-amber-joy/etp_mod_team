import { Component, OnInit, Input, Output, EventEmitter, Inject, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Offender } from '../shared/offender.model';
import { Note } from "../shared/note.model";
import { Admin } from "../shared/admin.model";
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

import { OffenderService } from "./offender.service";
import { AppModule } from '../app.module';
import { MatSelectChange } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'offenders-component',
    templateUrl: './offender.component.html',
    styleUrls: ['./offender.component.css']
})
export class OffenderComponent implements OnInit, AppModule {
    constructor(public dialog: MatDialog,
            private offenderService: OffenderService) { }

    ngOnInit() {
        this.getOffenders();
        this.offenders;

        // this.offenders = OffenderService.getList(url): Observable < Offender > {
        //     return this.httpClient.get('/api/people');
        // return an array of typed objects to iterate through
        // }
    }

    @Output()
    selectionChange: EventEmitter<MatSelectChange>
    offenders: Offender[];
    offender: Offender;
    newNote: string = '';
    addedName: string = '';

    getOffenders() {
        this.offenders = this.offenderService.getOffenders();
    }

    addNewNote(offender) {
        let noteToAdd = new Note(this.newNote, new Admin("Fake", "Tester", "Admin"))
        offender.notes.push(noteToAdd);
        this.newNote = '';
    }

    buttonClicked() {
        alert("This form doesn't do anything yet");
    }

    openDialog(): void {
        // Why does the data only bind if button is clicked, but not on hitting Enter?
        let dialogRef = this.dialog.open(DialogComponent, {
            data: {
                name: this.addedName,
                points: Number,
                note: String
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.offenders.push(result);
            }
            this.addedName = '';
        });
    }
}
