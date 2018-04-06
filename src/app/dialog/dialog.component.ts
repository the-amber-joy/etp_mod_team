import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewEncapsulation, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { Offender } from '../offender/offender.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Admin } from '../shared/admin.model';
import { Note } from '../shared/note.model';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  nameCtrl = new FormControl('', [Validators.required]);
  scoreCtrl = new FormControl('', [Validators.required] );
  noteCtrl = new FormControl('', [Validators.required]);

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

  @Output()
  selectionChange: EventEmitter<MatSelectChange>


  updateScore($event: EventEmitter<MatSelectChange>, data) {
    this.data.banStatus = data.score == 10;
  }

  addNew() {
    if (this.nameCtrl.valid && this.noteCtrl.valid && this.scoreCtrl.valid) {
      let newOffender = new Offender();
      newOffender.notes = [];
      let newNote = new Note(this.data.note, new Date(), new Admin("Fake", "Tester", "Admin"));

      newOffender.name = this.data.name;
      newOffender.score = this.data.score;
      newOffender.notes[0] = newNote;
      newOffender.nickname = this.data.nickname ? this.data.nickname : null;
      newOffender.dateAdded = new Date();
      newOffender.lastUpdated = new Date();
      newOffender.banStatus = this.data.banStatus;

      this.dialogRef.close(newOffender);
    } else { console.log("more data")}
  }

  cancelAdd(): void {
    this.data = null;
    this.dialogRef.close();
  }
}