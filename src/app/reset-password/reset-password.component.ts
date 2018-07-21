import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Admin } from '../shared/admin.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../header/header.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    displayName: string;
    password: string;
    currentUser: Admin;
    form: FormGroup;

    constructor(
        fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private headerService: HeaderService
    ) {
        this.form = fb.group({
            displayNameCtrl: new FormControl(this.currentUser, [Validators.required]),
            passwordCtrl: new FormControl('')
        })
    }

    ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.headerService.currentUser(
        {
            show: true,
            user: this.currentUser,
            currentPage: "ResetPasswordComponent"
        })
    }

    updateUser() {
        this.auth.updateUser(this.currentUser, this.password)
            .subscribe(
            data => {
                if (data = 'success') {
                    alert("Settings Updated. Please log back in to confirm changes.");
                    this.auth.logOut();
                    this.router.navigate(['/login']);
                }
            },
            error => {
                alert(error.error);
                console.log(error);
            });
  }

}
