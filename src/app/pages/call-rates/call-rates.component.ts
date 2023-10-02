import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { getDatabase, onValue, ref } from "@angular/fire/database";
import { Router } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-call-rates',
  templateUrl: './call-rates.component.html',
  styleUrls: ['./call-rates.component.scss']
})
export class CallRatesComponent implements OnInit {

  countryCtrl = new FormControl('');
  // @ts-ignore
  filteredCountries: Observable<any>;
  countries: any;
  countriesList: any = [];
  db = getDatabase();
  alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // Uppercase letters
  filterLetter: string = '';

  constructor(
    private router: Router,
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit(): void {

    this.titleService.setTitle("Vinota Call Rates | Affordable International Calling");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota Call Rates,Affordable International Calling' });
    this.metaService.updateTag({ name: 'description', content: 'Explore Vinota`s competitive call rates for global connections. Save on  international calls. Enjoy cheap rates and exceptional call quality. Check our rates now.' });
  // Get call rates
    onValue(ref(this.db, 'full_rate_db/minimum_rate'), (snapshot) => {
      const data = snapshot.val();
      this.countries = [];
      for (const k in data) {
        this.countries.push({ name: k, iso: data[k].iso.toLowerCase(), rate: data[k].rate })
      }
      this.filteredCountries = this.countryCtrl.valueChanges.pipe(
        startWith(''),
        map(country => (country ? this._filterStates(country) : this.countries.slice())),
      );
      this.countriesList = this.groupArrayByFirstLetter(this.countries);
    }, { onlyOnce: true });
  }

// Filter countries
  private _filterStates(value: string) {
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

  groupArrayByFirstLetter(arr: any) {
    const groups: any = {};
    arr.forEach((item: any) => {
      const firstLetter = item.name[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(item);
    });

    return Object.keys(groups).map(key => {
      return { key, countries: groups[key] };
    });
  }

  countrySelected(v: any) {
    if (!v) {
      v = this.countryCtrl.value?.replace(/\s/, '-').toLowerCase();
    } else {
      v = v.replace(/\s/, '-').toLowerCase();
    }
    this.router.navigate(['/call-rates', v])
  }
  trackItems = (index: number, itemObject: any) => itemObject.id;
}

@Pipe({
  name: 'filterByLetter'
})
export class FilterByLetter implements PipeTransform {
  transform(value: any, arg: string): any {
    if (arg) {
      return value.filter((i: any) => i.key.toLowerCase() === arg.toLowerCase());
    } else {
      return value;
    }
  }
}
