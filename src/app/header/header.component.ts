import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Admin } from '../shared/admin.model';
import { Subscription } from 'rxjs';
import { HeaderService } from './header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser: Admin;
    userData: any;
    subscription: Subscription;
    APP_TITLE = "ETP Mod Team";

    constructor(
        private auth: AuthService,
        private headerService: HeaderService
    ) {
        this.subscription = headerService
            .returnUser()
            .subscribe(result => {
                this.userData = result;
            });
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.APP_TITLE = this.currentUser ? "Welcome, " + this.currentUser.firstName + "!" : this.APP_TITLE;
    }

    logOut() {
        this.auth.logOut();
        this.currentUser = null;
    }
}
