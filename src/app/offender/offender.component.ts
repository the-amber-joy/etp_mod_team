import { Component, OnInit, Input, Output, EventEmitter, Inject, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Offender } from '../shared/offender.model';
import { Note } from "../shared/note.model";
import { Admin } from "../shared/admin.model";
import { OffenderService } from "./offender.service";
import { AppModule } from '../app.module';
import { MatSelectChange } from '@angular/material';
import { OffenderDialogComponent } from '../offender-dialog/offender-dialog.component';
import { HeaderService } from '../header/header.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'offenders-component',
    templateUrl: './offender.component.html',
    styleUrls: ['./offender.component.css']
})
export class OffenderComponent implements OnInit, AppModule {
    currentUser: Admin;
    constructor(
        public dialog: MatDialog,
        private offenderService: OffenderService,
        private headerService: HeaderService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    ngOnInit() {
        this.getAll();
    }

    @Output()
    selectionChange: EventEmitter<MatSelectChange>
    offenders: Offender[] = [];
    filteredNames: Offender[];
    offenderNames = [];
    offender: Offender;
    newNote: string = '';
    addedName: string = '';
    watchStatus: string;

    getAll() {
        this.headerService.currentUser(
            {
                show: true,
                user: this.currentUser
            }
        );

        return this.offenderService.getAll().subscribe(response => {
            this.offenders = response;
            this.offenders.forEach(offender => {
                offender.originalPoints = offender.points;
                offender.originalStatus = offender.isBanned;
                offender.watchStatus = this.getWatchStatus(offender);
            });
            this.sortnames();
            this.filteredNames = this.offenders;
            return this.offenders;
        });
    }

    sortnames() {
        this.offenders.forEach(offender => {
            this.offenderNames.push(offender.name)
        });

        this.offenders.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
    }

    clearValue() {
        this.addedName = '';
        this.applyFilter(this.addedName);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim().toLocaleLowerCase();

        this.filteredNames = this.offenders.filter(offender => {
            if (offender.name.toLocaleLowerCase().indexOf(filterValue) !== -1) {
                return true;
            }
                return false;
            }
        );
    }

    openDialog(addedName) {
        let dialogRef = this.dialog.open(OffenderDialogComponent, {
            data: {
                name: addedName,
                nickName: '',
                note: '',
                points: 0,
                admin: this.currentUser
            }
        });
        this.addedName = '';

        dialogRef.afterClosed().subscribe(dialogData => {
            if (dialogData == null) {
                this.clearValue();
                return;
            }
            else {
                return this.offenderService.postNew(dialogData).subscribe(response => {
                    response.originalPoints = response.points;
                    response.originalStatus = response.isBanned;
                    this.offenders.push(response);
                    this.sortnames();
                    this.clearValue();
                })
            }
        });
    }

    addNewNote(offender) {
        let noteToAdd = { note: this.newNote, isNew: true, created: new Date(), createdBy: this.currentUser }
        offender.notes.push(noteToAdd);
        offender.notesAdded = true;
        offender.changesMade = true;

        this.newNote = '';
    }

    pointsChanged($event: EventEmitter<MatSelectChange>, offender) {
        offender.watchStatus = this.getWatchStatus(offender);

        if (offender.points == offender.originalPoints) {
            offender.pointsChanged = false;
        }
        if (offender.points != offender.originalPoints || offender.isBanned != offender.originalStatus) {
            if (offender.points != offender.originalPoints) {
                offender.pointsChanged = true;
            }
            if (offender.isBanned != offender.originalStatus) {
                offender.banStatusChanged = true;
            }
            offender.changesMade = true;
        } else if (offender.points == offender.originalPoints
            && offender.isBanned == offender.originalStatus
            && !offender.notesAdded
        ) {
            offender.changesMade = false;
        }
    }

    banStatusChanged(offender) {
        offender.isBanned = !offender.isBanned;
        if (offender.originalStatus == offender.isBanned) {
            offender.banStatusChanged = false;
        }
        if (offender.originalStatus != offender.isBanned) {
            offender.banStatusChanged = true;
            offender.changesMade = true;
            offender.updatedBy = this.currentUser;
            offender.bannedBy = this.currentUser;
            offender.dateBanned = new Date();
        } else if (
            offender.originalStatus == offender.isBanned
            && offender.originalPoints == offender.points
            && !offender.notesAdded
        ) {
            offender.changesMade = false;
        }
    }

    saveChanges(offender: Offender, currentUser: Admin) {
        currentUser = this.currentUser;
        let newNotes: Note[] = [];

        function saveNotes() {
            if (offender.notesAdded) {
                newNotes = [];
                offender.notes.forEach(note => {
                    if (note.isNew) {
                        note.isNew = false;
                        newNotes.push(note)
                    }
                })
                offender.updatedBy = currentUser;
            }
        }

        if (this.newNote !== '') {
            this.addNewNote(offender);
        }

        if ((offender.originalStatus !== offender.isBanned) || (offender.originalPoints !== offender.points)) {
            saveNotes();
            this.resetOffender(offender);
            if (offender.originalStatus !== offender.isBanned && offender.isBanned == true) {
                offender.bannedBy = this.currentUser;
                offender.dateBanned = new Date();
            }
            this.offenderService.updateStatus({
                _id: offender._id,
                notes: newNotes,
                points: offender.points,
                isBanned: offender.isBanned,
                updated: offender.updated,
                updatedBy: this.currentUser,
                bannedBy: offender.bannedBy,
                dateBanned: offender.dateBanned
            }).subscribe();
        }
        this.clearValue();
    }

    resetOffender(offender) {
        offender.originalPoints = offender.points;
        offender.originalStatus = offender.isBanned;
        offender.watchStatus = this.getWatchStatus(offender);
        offender.changesMade = false;
        offender.updated = new Date();
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
            offender.watchStatus = this.getWatchStatus(offender);
        }
        offender.changesMade = false;
        this.clearValue();
    }

    getWatchStatus(offender) {
        if (offender.points == 0) {
            return "Probation"
        } else if (offender.points == 1) {
            return "Watching"
        } else if(offender.points == 2) {
            return "Warned"
        } else {
            return "Final Straw"
        }
    }
}
