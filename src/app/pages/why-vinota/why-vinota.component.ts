import { Component, ViewChild, OnInit,  Renderer2, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-why-vinota',
  templateUrl: './why-vinota.component.html',
  styleUrls: ['./why-vinota.component.scss']
})
export class WhyVinotaComponent {
  public changeClass = true;
  isActive = 1;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public navigateToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }


  next() {
    if (this.isActive == 3) this.isActive = 0;
    this.isActive ++;
  }
  pre() {
    this.isActive --;
    if (this.isActive == 0) this.isActive = 3;
  }
}
