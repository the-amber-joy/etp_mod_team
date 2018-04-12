import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewEncapsulation, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Offender } from '../shared/offender.model'
import { Admin } from '../shared/admin.model';
import { Note } from '../shared/note.model';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string, nickName: string, points: number, note: string}) {  }

  ngOnInit() {
    this.createPoints()
    this.newOffender = new Offender();
  }

  name = this.data.name;
  newOffender: Offender;
  newNote: string;
  nameCtrl = new FormControl(this.data.name, [Validators.required]);
  pointsCtrl = new FormControl(0, [Validators.required]);
  noteCtrl = new FormControl('', [Validators.required]);
  points = new Array();

  createPoints() {
    for (let i = 0; i < 10; i++) {
      let point = { "value": i + 1, "display": i + 1 };
      this.points.push(point);
    }
  }

  selectPoints(pointValue) {
    this.data.points = pointValue;
  }

  getNameError() {
    if (this.nameCtrl.hasError('required')) {
      return 'Name is required';
    }
  }

  getScoreError() {
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
      this.newOffender.originalStatus = false;
      this.newOffender.nickName = this.data.nickName ? this.data.nickName : null;
      this.dialogRef.close(this.newOffender);
    }
  }

  cancelAdd(): void {
    this.data = null;
    this.dialogRef.close();
  }
}