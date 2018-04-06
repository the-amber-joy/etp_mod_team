import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewEncapsulation, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { Offender } from '../offender/offender.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  newOffender: Offender;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  @Output()
  selectionChange: EventEmitter<MatSelectChange>

  addNew() {
    this.newOffender = new Offender();
    this.newOffender.name = this.data.name;
    this.newOffender.score = this.data.score;
    this.newOffender.notes[0] = this.data.note;
    this.newOffender.banStatus = this.data.score == 10 ? true : false;
    this.newOffender.nickname = this.data.nickname ? this.data.nickname : null;
    this.newOffender.dateAdded = new Date();
    this.newOffender.lastUpdated = new Date();
  }

  cancelAdd(): void {
    this.dialogRef.close();
  }
}
