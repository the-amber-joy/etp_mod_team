import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatFormFieldControl, MatInputModule, MatSlideToggleModule,
    MatDividerModule, MatSelectModule, MatSelectChange, MatExpansionModule,
    MatListModule, MatDialogModule, MatIconModule, MatMenuModule,
    MatToolbarModule, MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OffenderComponent } from "../app/offender/offender.component";
import { OffenderService } from './offender/offender.service';
import { OffenderDialogComponent } from './offender-dialog/offender-dialog.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { UserComponent } from './user/user.component';
import { JwtInterceptorProvider } from './jwt.interceptor';
import { AuthGuard } from './auth.guard';
import { AuthService } from './shared/auth.service';
import { HeaderModule } from './header/header.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
    declarations: [
        AppComponent,
        OffenderComponent,
        OffenderDialogComponent,
        LoginComponent,
        UserComponent,
        ResetPasswordComponent,
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
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        AppRoutingModule,
        HeaderModule
    ],
    providers: [
        HttpClientModule,
        OffenderService,
        JwtInterceptorProvider,
        AuthGuard,
        AuthService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        OffenderDialogComponent,
    ]
})
export class AppModule { }
