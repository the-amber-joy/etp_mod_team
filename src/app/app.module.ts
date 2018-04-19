import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatFormFieldControl, MatInputModule, MatSlideToggleModule,
  MatDividerModule, MatSelectModule, MatSelectChange, MatExpansionModule,
  MatListModule, MatDialogModule, MatIconModule, MatMenuModule,
  MatToolbarModule, MatCardModule, MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OffenderComponent } from "../app/offender/offender.component";
import { OffenderService } from './offender/offender.service';
import { OffenderDialogComponent } from './offender-dialog/offender-dialog.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    OffenderComponent,
    OffenderDialogComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    HttpClientModule,
    OffenderService
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    OffenderDialogComponent,
  ]
})
export class AppModule { }
