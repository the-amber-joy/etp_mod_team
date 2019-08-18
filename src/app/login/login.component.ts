import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../header/header.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMsg: string;
    returnUrl: string;
    username: string = '';
    password: string = '';
    loginFailed: boolean = false;
    loginCtrl = new FormControl('', [Validators.required]);
    passwordCtrl = new FormControl('', [Validators.required]);

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
        private headerService: HeaderService
    ) { }

    ngOnInit() {
        if (localStorage.getItem('user') !== null) {
            this.router.navigate(['/']);
        } else {
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.headerService.currentUser(
                {
                    show: true,
                    user: null,
                    currentPage: "LoginComponent"
                }
            )
        }
    }

    login() {
        this.auth.login(this.username, this.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.errorMsg = error.error;
                    this.loginFailed = true;
                });
    }
}
