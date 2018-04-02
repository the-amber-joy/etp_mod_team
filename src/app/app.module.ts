import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatSlideToggleModule, MatDividerModule, MatSelectModule, MatSelectChange, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OffenderComponent } from "../app/offender/offender.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from '../app/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    OffenderComponent,
    // NavbarComponent,
    FooterComponent
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
    MatExpansionModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [
    AppComponent,
    OffenderComponent,
    // NavbarComponent,
    FooterComponent
  ]
})
export class AppModule { }
