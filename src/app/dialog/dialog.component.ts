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

  // form: FormGroup;
  // description: string;

  // constructor(
  //   private fb: FormBuilder,
  //   private dialogRef: MatDialogRef<DialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) data) {

  //   this.description = data.description;
  // }

  // ngOnInit() {
  //   this.form = this.fb.group({
  //     description: [this.description, []],
  //       });
  // }

  // save() {
  //   this.dialogRef.close(this.form.value);
  // }

  // close() {
  //   this.dialogRef.close();
  // }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  @Output()
  selectionChange: EventEmitter<MatSelectChange>

  cancelAdd(): void {
    this.dialogRef.close();
  }
}
