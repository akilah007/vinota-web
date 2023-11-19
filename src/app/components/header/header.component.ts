import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router, Event, NavigationStart, RouterLink } from '@angular/router';
import { CommonFunctionsService } from "../../services/common-functions.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterLink
  ],
  standalone: true
})

export class HeaderComponent implements AfterViewInit {

  public show_hide_support: boolean = false;
  navIcon: any;
  navBar: any;

  constructor(
    private commonFunctionsService: CommonFunctionsService,
    private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navIcon = this.el.nativeElement.querySelector('.nav-icon');
    this.navBar = this.el.nativeElement.querySelector('.nav-bar');
  }

  // mobile view menu
  toggleNav() {
    this.navBar.classList.toggle('active');
    this.navIcon.classList.toggle('active');
  }

  // show and hide support section
  showSupportSection(value:any) {
    if (this.show_hide_support == true) {
      this.commonFunctionsService.send_data.next(true);
    } else {
      this.commonFunctionsService.send_data.next(false);
    window.scroll(0, 0);
    }
  }

  ngOnDestroy(): void {

  }
}
