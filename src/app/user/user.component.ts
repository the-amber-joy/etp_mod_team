import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { Admin } from '../shared/admin.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    currentUser: Admin;
    users = [];
    columnsToDisplay = ['displayName', 'name'];

    constructor(
        private authService: AuthService,
        private router: Router,
        private headerService: HeaderService
) { }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.headerService.currentUser(
            {
                show: true,
                user: this.currentUser
            }
        );
        this.getUsers();
  }

    getUsers() {
        return this.authService.getAll().subscribe(response => {
            this.users = response;
            return this.users;
        })
    }
}
