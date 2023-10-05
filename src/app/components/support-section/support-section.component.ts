import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf, ViewportScroller} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.component.html',
  styleUrls: ['./support-section.component.scss'],
  standalone: true,
  imports: [CarouselModule, NgForOf, RouterLink, CurrencyPipe, NgIf, DecimalPipe]
})
export class SupportSectionComponent {
  public changeClass = true;

  constructor(
    private viewportScroller: ViewportScroller,
   ) {
  }

  public navigateToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }
}
