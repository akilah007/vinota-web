import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {getDatabase, onValue, ref} from "@angular/fire/database";

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.scss'],
  standalone: true,
  imports: [CarouselModule, NgForOf, RouterLink, CurrencyPipe, NgIf, DecimalPipe]
})
export class TopDestinationsComponent implements OnInit {
  @ViewChild('carousel', {static: false}) carousel: ElementRef | any;
  topDestinations: any = [];
  customOptions: OwlOptions | any;
  db = getDatabase();
  constructor() {
  }
  ngOnInit() {
    this.getData();
    // Create an OwlCarousel instance.
    this.customOptions = {
      items: 5,
      loop: true,
      autoplay: true,
      navBy: 1,
      autoplayTimeout: 4500,
      autoplayHoverPause: true,
      smartSpeed: 1500,
      margin: 80,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 1
        },
        768: {
          items: 2
        },
        991: {
          items: 4
        },
        1000: {
          items: 5
        }
      }
    };
  }
  getData() {
    onValue(ref(this.db, '/full_rate_db/minimum_rate'), snapshot => {
      const d = snapshot.val();
      const countries = ['Mexico', 'United States', 'Australia', 'India', 'Pakistan', 'Bangladesh'];
      for (const x of countries) {
        this.topDestinations.push({name: x, iso: d[x].iso.toLowerCase(), rate: d[x].rate, link: x});
      }
    }, {onlyOnce: true})
  }
  trackItems = (index: number, itemObject: any) => itemObject.id;


}
