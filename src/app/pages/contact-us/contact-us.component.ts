import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public changeClass = true;

  constructor() { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
