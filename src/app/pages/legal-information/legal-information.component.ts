import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.scss']
})
export class LegalInformationComponent {
  public changeClass = true;

  constructor() { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
