import { Component } from '@angular/core';
@Component({
  selector: 'app-why-vinota',
  templateUrl: './why-vinota.component.html',
  styleUrls: ['./why-vinota.component.scss']
})
export class WhyVinotaComponent {
  public changeClass = true;
  isActive = 1;

  constructor() { }


  next() {
    if (this.isActive == 3) this.isActive = 0;
    this.isActive ++;
  }
  pre() {
    this.isActive --;
    if (this.isActive == 0) this.isActive = 3;
  }
}
