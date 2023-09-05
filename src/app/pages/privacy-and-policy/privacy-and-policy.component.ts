import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-and-policy',
  templateUrl: './privacy-and-policy.component.html',
  styleUrls: ['./privacy-and-policy.component.scss']
})
export class PrivacyAndPolicyComponent {
  public changeClass = true;

  constructor() { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
