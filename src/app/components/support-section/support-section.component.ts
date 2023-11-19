import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf, ViewportScroller} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { trigger, transition, animate, style } from '@angular/animations'
import { CommonFunctionsService } from 'src/app/services/common-functions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.component.html',
   animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ],
  styleUrls: ['./support-section.component.scss'],
  standalone: true,
  imports: [CarouselModule, NgForOf, RouterLink, CurrencyPipe, NgIf, DecimalPipe]
})
export class SupportSectionComponent {

  public changeClass = true;
  public show: boolean = false;
  show_hide_suport_div!: Subscription;

  constructor(
    private viewportScroller: ViewportScroller,private commonFunctionsService: CommonFunctionsService
   ) {
  }

  public navigateToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }

  ngOnInit() {}

  ngAfterContentInit() {
   this.commonFunctionsService.send_data.subscribe((data) => {
      this.viewportScroller.scrollToAnchor('support_section');
      this.show_hide_suport_div = data;
    });
  }

}
