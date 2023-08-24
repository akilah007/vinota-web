import { Component, ViewChild, OnInit,  Renderer2, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public changeClass = true;

  
  constructor(private viewportScroller: ViewportScroller) {}


  ngOnInit(): void {
    // this.loadDynamicContent();
  }
  public navigateToSection(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }
}
