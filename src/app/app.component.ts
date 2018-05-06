import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    isAuthenticated = false;

    // ngOnInit() {
    //   console.log(this.isAuthenticated)
    // }
}
