import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OffenderComponent } from '../offender/offender.component'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }

  copyright: Number;

  ngOnInit() {
    this.copyright = new Date().getFullYear();
  }

}