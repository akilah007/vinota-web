import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crypto-payments',
  templateUrl: './crypto-payments.component.html',
  styleUrls: ['./crypto-payments.component.scss']
})
export class CryptoPaymentsComponent {
  constructor(
    private router: Router
  ) { }

  showMore(url:any) {
    if(url == 'best-calling-app'){
      this.router.navigate(['/best-international-calling-app'])
    }
  }
}
