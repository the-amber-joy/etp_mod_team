import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewEncapsulation, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Offender } from '../models/offender.model'
import { Admin } from '../models/admin.model';
import { Note } from '../models/note.model';

@Component({
  selector: 'offender-dialog',
  templateUrl: './offender-dialog.component.html',
  styleUrls: ['./offender-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OffenderDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OffenderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, nickName: string, points: number, note: string }
  ) { }

  ngOnInit() {
    this.newOffender = new Offender();
  }

  @Output() selectionChange: EventEmitter<MatSelectChange>
  name = this.data.name;
  newOffender: Offender;
  newNote: string;
  nameCtrl = new FormControl(this.data.name, [Validators.required]);
  pointsCtrl = new FormControl(0, [Validators.required]);
  noteCtrl = new FormControl('', [Validators.required]);

  selectPoints(pointValue) {
    this.data.points = pointValue;
  }

  getNameError() {
    if (this.nameCtrl.hasError('required')) {
      return 'Name is required';
    }
  }

  getPointsError() {
    if (this.pointsCtrl.hasError('required')) {
      return 'Please select a value 1-10';
    }
  }

  getNotesError() {
    if (this.noteCtrl.hasError('required')) {
      return 'Please add a note about why you are shit-listing ' + this.data.name;
    }
  }

  addNew() {
    if (this.nameCtrl.valid && this.noteCtrl.valid && this.pointsCtrl.valid) {
      this.newOffender.notes = [];

      let newNote = new Note(this.newNote, { firstName: "Fake", lastName: "Tester", nickName: "Admin" });
      newNote.isNew = false;
      this.newOffender.notes.push(newNote);
      this.newOffender.name = this.data.name;
      this.newOffender.points = this.data.points;
      this.newOffender.originalPoints = this.data.points;
      this.newOffender.isBanned = false;
      this.newOffender.originalStatus = this.newOffender.isBanned;
      this.newOffender.nickName = this.data.nickName ? this.data.nickName : null;
      this.newOffender.watchStatus = this.getWatchStatus();
      this.dialogRef.close(this.newOffender);
    }
  }

  getWatchStatus() {
    if (this.data.points == 1) {
      return "New";
    } else if (this.data.points == 2) {
      return "Watch";
    }
    return "WARNING";
  }

  cancelAdd(): void {
    this.data = null;
    this.dialogRef.close();
  }

}