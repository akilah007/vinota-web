import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vinota';
  constructor(private router: Router) {
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
