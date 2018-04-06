import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewEncapsulation, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { Offender } from '../offender/offender.model';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  @Output()
  selectionChange: EventEmitter<MatSelectChange>


  updateScore($event: EventEmitter<MatSelectChange>, data) {
    this.data.banStatus = data.score == 10;
  }

  addNew() {
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
  }

  cancelAdd(): void {
    this.dialogRef.close();
  }
}