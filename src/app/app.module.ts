import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatFormFieldControl, MatInputModule, MatSlideToggleModule,
  MatDividerModule, MatSelectModule, MatSelectChange, MatExpansionModule,
  MatListModule, MatDialogModule, MatIconModule, MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OffenderComponent } from "../app/offender/offender.component";


@NgModule({
  declarations: [
    AppComponent,
    OffenderComponent,
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
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
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
