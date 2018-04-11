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
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {  }

  ngOnInit() {
    this.createPoints()
  }

  @Output() selectionChange: EventEmitter<MatSelectChange>
  nameCtrl = new FormControl('', [Validators.required]);
  scoreCtrl = new FormControl(0, [Validators.required]);
  noteCtrl = new FormControl('', [Validators.required]);
  points = new Array();

  createPoints() {
    for (let i = 0; i < 10; i++) {
      let point = { "value": i + 1, "display": i + 1 };
      this.points.push(point);
    }
  }

  selectPoints(pointValue) {
    this.data.score = pointValue;
  }

  getNameError() {
    if (this.nameCtrl.hasError('required')) {
      return 'Name is required';
    }
  }

  getScoreError() {
    if (this.scoreCtrl.hasError('required')) {
      return 'Please select a value 1-10';
    }
  }

  getNotesError() {
    if (this.noteCtrl.hasError('required')) {
      return 'Please add a note about why you are shit-listing ' + this.data.name;
    }
  }

  addNew() {
    if (this.nameCtrl.valid && this.noteCtrl.valid && this.scoreCtrl.valid) {
      let newOffender = new Offender();
      newOffender.notes = [];
      let newNote = new Note(this.data.note, { firstName: "Fake", lastName: "Tester", nickName: "Admin" })
      newNote.isNew = false;
      newOffender.name = this.data.name;
      newOffender.points = this.data.score;
      newOffender.originalPoints = this.data.score;
      newOffender.isBanned = false;
      newOffender.originalStatus = false;
      newOffender.notes.push(newNote);
      newOffender.nickName = this.data.nickname ? this.data.nickname : null;

      this.dialogRef.close(newOffender);
    }
  }

  cancelAdd(): void {
    this.data = null;
    this.dialogRef.close();
  }

  createDropdown() {
    for (let i = 0; i > 10; i++) {
      let point = {"value": i+1, "display": i+1}
      this.points.push(point);
    }
    return this.points;
  }

}