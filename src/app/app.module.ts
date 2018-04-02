import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatFormFieldControl, MatInputModule, MatSlideToggleModule,
  MatDividerModule, MatSelectModule, MatSelectChange, MatExpansionModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OffenderComponent } from "../app/offender/offender.component";
import { AddNewComponent } from './offender/add-new/add-new.component';


@NgModule({
  declarations: [
    AppComponent,
    OffenderComponent,
    AddNewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [
    AppComponent,
    OffenderComponent,
  ]
})
export class AppModule { }
