import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { isDevMode } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vinota';
  all_sections = 'show';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url == '/legal-information' || this.router.url == '/terms-&-conditions' || this.router.url == '/privacy-policy' || this.router.url == '/data-depletion-policy'|| this.router.url == '/security-policy' || this.router.url == '/legal-information/terms-&-conditions') {
            this.all_sections = 'hide'
          } else {
            this.all_sections = 'show'
          }
        }
      }
    );
    console.log(isDevMode());
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Notify Hotjar of the route change
        if ((window as any).hj) {
          (window as any).hj('stateChange', event.urlAfterRedirects);
        }
      }
    });
  }
}
