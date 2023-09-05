import { Component } from '@angular/core';

@Component({
  selector: 'app-security-policy',
  templateUrl: './security-policy.component.html',
  styleUrls: ['./security-policy.component.scss']
})
export class SecurityPolicyComponent {
  public changeClass = true;

  constructor() { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
