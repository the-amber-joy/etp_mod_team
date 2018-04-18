import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }

  // constructor(private router: Router) {
  // }

  username: string
  password: string

  login(): void {
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}
