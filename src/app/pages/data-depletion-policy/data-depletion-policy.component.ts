import { Component } from '@angular/core';

@Component({
  selector: 'app-data-depletion-policy',
  templateUrl: './data-depletion-policy.component.html',
  styleUrls: ['./data-depletion-policy.component.scss']
})
export class DataDepletionPolicyComponent {
  public changeClass = true;

  constructor() { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
