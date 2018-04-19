import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    this.showSpinner = false;
  }

  showSpinner: boolean;
  // constructor(private router: Router) {
  // }

  username: string
  password: string

  login(): void {
    this.showSpinner = true
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}
