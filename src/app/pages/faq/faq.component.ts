import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public changeClass = true;

  constructor() { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
