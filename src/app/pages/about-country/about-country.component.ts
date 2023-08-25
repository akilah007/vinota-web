import { Component, ViewChild, OnInit,  Renderer2, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-country',
  templateUrl: './about-country.component.html',
  styleUrls: ['./about-country.component.scss']
})
export class AboutCountryComponent {
  public changeClass = true;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public navigateToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }
}
