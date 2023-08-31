import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public changeClass = true;

  constructor(private viewportScroller: ViewportScroller) { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
