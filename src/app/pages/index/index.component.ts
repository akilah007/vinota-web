import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {getDatabase, onValue, ref} from "@angular/fire/database";
import {Router} from "@angular/router";
import { Meta } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public changeClass = true;
  private timer: any = 0;
  imageURL = environment.imageURL;
  countryCtrl = new FormControl('');
  // @ts-ignore
  filteredCountries: Observable<any>;
  countries: any;
  db = getDatabase();
  selectedTitle = '';
  selectedDescription = '';
  currentLanguage = 'English';
  languages = ['English', 'French', 'Spanish', 'German', 'Chinese'];
  titleArray = ["Crystal Clear Voice Quality", "Accessible to Any Device: Android and iOS"];
  descriptionArray = ["Immerse yourself in conversations with Vinota's crystal clear voice quality. Our advanced technology ensures uninterrupted and high-quality calls. Enjoy conversations that feel like you're in the same room, no matter the distance.", "Experience the convenience and flexibility of Vinota across all your devices. Our app is designed to be compatible with various platforms, ensuring that you can enjoy seamless communication no matter which device you prefer."];

  constructor(
    private router: Router,
    private metaService: Meta,
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota,Affordable International Calling App,High Quality International Calls ' });
    this.metaService.updateTag({ name: 'description', content: 'Stay connected worldwide with Vinota`s international calling app. Experience crystal-clear international calls and affordable rates.' });
    onValue(ref(this.db, 'full_rate_db/minimum_rate'), (snapshot) => {
      const data = snapshot.val();
      this.countries = [];
      for (const k in data) {
        this.countries.push({ name: k, iso: data[k].iso.toLowerCase(), rate: data[k].rate})
      }
      this.filteredCountries = this.countryCtrl.valueChanges.pipe(
        startWith(''),
        map(country => (country ? this._filterStates(country) : this.countries.slice())),
      );
    }, { onlyOnce: true});
    this.selectRandomTitle();
    this.timer = setInterval(() => {
      this.selectRandomTitle();
    }, 2000);
    setTimeout(() => {
      // Clear the interval
      clearInterval(this.timer);
    }, 60000);
  }

  trackItems = (index: number, itemObject: any) => itemObject.id;
  private _filterStates(value: string): any[] {
    let filterValue = value.toLowerCase();
    let filerArray = this.countries.filter((country: any) => country.name.toLowerCase().includes(filterValue));
        if( filterValue=='ksa'){
          let obj={
            "name":'Saudi Arabia',
            "iso": "sa",
            "rate":0.0767,
          }
          filerArray.push(obj)
        }
        if(filterValue=='rok'){
           let obj={
            "name":'South Korea',
            "iso": "kr",
            "rate": 0.0216,
          }
          filerArray.push(obj)
        }
        if(filterValue=='usa'){
          let obj={
            "name":'United States',
            "iso": "us",
            "rate":0.01,
          }
          filerArray.push(obj)
        }
        if(filterValue=='uk'|| filterValue=='great britain' || filterValue=='britain'|| filterValue=='england'){
          let obj={
            "name":'United Kingdom',
            "iso": "gb",
            "rate":0.0595,
          }
          filerArray.push(obj)
        }
        if(filterValue=="deutschland" || filterValue=="frg"){
          let obj={
            "name":'Germany',
            "iso": "de",
            "rate": 0.1825,
          }
          filerArray.push(obj)
        }
        if(filterValue=='italia'){
          let obj={
            "name":'Italy',
            "iso": "it",
            "rate": 0.01,
          }
          filerArray.push(obj)
        }
        if(filterValue=='prc'){
          let obj={
            "name":'China',
            "iso": "cn",
            "rate": 0.216,
          }
          filerArray.push(obj)
        }
        if(filterValue=='rsa'){
          let obj={
            "name":'South Africa',
            "iso": "za",
            "rate": 0.1674,
          }
          filerArray.push(obj)
        }
        if(filterValue=='uae' || filterValue=='abu dhabi'  || filterValue=='dubai' || filterValue=='sharjah' || filterValue=='ajman' || filterValue== 'umm al-quwain' || filterValue=='fujairah'){
          let obj={
            "name":'United Arab Emirates',
            "iso": "ae",
            "rate": 0.1393,
          }
          filerArray.push(obj)
        }
        if(filterValue=='drc'){
          let obj={
            "name":'Democratic Republic of the Congo',
            "iso": "cd",
            "rate": 0.3205,
          }
          filerArray.push(obj)
        }
        return filerArray
  }

  selectRandomTitle() {
    const randomIndex = Math.floor(Math.random() * this.titleArray.length);
    this.selectedTitle = this.titleArray[randomIndex];
    this.selectedDescription = this.descriptionArray[randomIndex];
  }

  async countrySelected() {
    const v = this.countryCtrl.value?.replace(/\s/, '-').toLowerCase();
    await this.router.navigate(['/call-rates', v])
  }
}
