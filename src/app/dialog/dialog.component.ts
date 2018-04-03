import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { Offender } from '../offender/offender.model';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  newOffender: Offender;

  ngOnInit() { }

  @Output()
  selectionChange: EventEmitter<MatSelectChange>

  doSomething($event: EventEmitter<MatSelectChange>) {
    this.newOffender.banStatus = this.newOffender.score == 10;
  }

  // addNew(): void {
  //   this.dialogRef.close(
  //     this.newOffender = result;
  //   )
  // }

  cancelAdd(): void {
    this.dialogRef.close("Canceled");
  }
}
