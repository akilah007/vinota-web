import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  public changeClass = true;

  constructor() { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
