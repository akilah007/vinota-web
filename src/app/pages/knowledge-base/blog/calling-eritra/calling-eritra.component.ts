import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calling-eritra',
  templateUrl: './calling-eritra.component.html',
  styleUrls: ['./calling-eritra.component.scss']
})
export class CallingEritraComponent {
  constructor(
    private router: Router
  ) { }

  showMore(url:any) {
    if(url == 'best-calling-app'){
      this.router.navigate(['/best-international-calling-app'])
    }
  }
}
