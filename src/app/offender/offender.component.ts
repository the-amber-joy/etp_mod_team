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
import { notDeepEqual } from 'assert';

@Component({
    selector: 'offenders-component',
    templateUrl: './offender.component.html',
    styleUrls: ['./offender.component.css']
})
export class OffenderComponent implements OnInit, AppModule {
    constructor(
        public dialog: MatDialog,
        private offenderService: OffenderService
    ) { }

    ngOnInit() {
        this.getAll();
    }

    @Output()
    selectionChange: EventEmitter<MatSelectChange>
    offenders: Offender[];
    offender: Offender;
    newNote: string = '';
    addedName: string = '';

    getAll() {
        return this.offenderService.getAll().subscribe(response => {
            console.log(response);
            this.offenders = response;
            this.offenders.forEach(offender => {
                offender.originalPoints = offender.points;
                offender.originalStatus = offender.isBanned;
            })
            return this.offenders;
        });
    }

    addNewNote(offender) {
        let noteToAdd = { note: this.newNote, isNew: true, created: new Date().toISOString(), addedBy: { firstName: "Fake", lastName: "Tester", nickName: "Admin" } }
        offender.notes.push(noteToAdd);
        offender.notesAdded = true;
        offender.changesMade = true;

        this.newNote = '';
        console.log(offender.notes);
    }


    pointsChanged($event: EventEmitter<MatSelectChange>, offender) {
        if (offender.originalPoints == offender.points) {
            offender.pointsChanged = false;
        }
        if (offender.originalPoints != offender.points) {
            offender.changesMade = true;
            offender.pointsChanged = true;
        } else if (offender.originalPoints == offender.points
            && offender.originalStatus == offender.isBanned
            && !offender.notesAdded
        ) {
            offender.changesMade = false;
        }
    }

    banStatusChanged($event: EventEmitter<any>, offender) {
        if (offender.originalStatus == offender.isBanned) {
            offender.banStatusChanged = false;
        }
        if (offender.originalStatus != offender.isBanned) {
            offender.banStatusChanged = true;
            offender.changesMade = true;
        } else if (
            offender.originalStatus == offender.isBanned
            && offender.originalPoints == offender.points
            && !offender.notesAdded
        ) {
            offender.changesMade = false;
        }
    }

    openDialog(): void {
        // Why does the data only bind if button is clicked, but not on hitting Enter?
        let dialogRef = this.dialog.open(DialogComponent, {
            data: {
                name: this.addedName,
                points: Number,
                note: new String()
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.offenders.push(result);
            }
            this.addedName = '';
        });
    }

    saveChanges(offender) {
        alert("Sorry, I haven't implemented this function yet! -Amber");

        if (offender.notesAdded) {
            // POST new notes
        }
        if (offender.banStatusChanged) {
            // PUT new ban status
        }
        if (offender.pointsChanged) {
            // PUT new points
        }
    }

    discardChanges(offender) {
        if (offender.notesAdded) {
            offender.notes.forEach(note => {
                if (note.isNew) {
                    let idx = offender.notes.indexOf(note);
                    offender.notes.splice(idx);
                }
                offender.notesAdded = false;
            })
        }
        if (offender.banStatusChanged) {
            offender.isBanned = offender.originalStatus;
        }
        if (offender.pointsChanged) {
            offender.points = offender.originalPoints;
        }
        offender.changesMade = false;
    }

}
