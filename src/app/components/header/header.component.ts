import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError,RouterLink } from '@angular/router';

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
  public changeClass = true;

  navIcon: any;
  navBar: any;
  constructor(private viewportScroller: ViewportScroller,
              private el: ElementRef,private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.changeClass = true
      }
  });
  }
  ngAfterViewInit() {
    this.navIcon = this.el.nativeElement.querySelector('.nav-icon');
    this.navBar = this.el.nativeElement.querySelector('.nav-bar');
  }
  toggleNav() {
    this.navBar.classList.toggle('active');
    this.navIcon.classList.toggle('active');
  }
  public navigateToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }
  ngOnDestroy(): void {
  
  }
}
