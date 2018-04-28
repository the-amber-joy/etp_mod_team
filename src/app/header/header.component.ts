import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  logOut() {
    // Send call to user authentication API
    // Call logout method
    return this.auth.logOut();
  }

  settings() {
    alert("you don't have any settings")
  }


}
