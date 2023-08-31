import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { getDatabase, onValue, ref } from "@angular/fire/database";
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public changeClass = true;
  imageURL = environment.imageURL;
  countryCtrl = new FormControl('');
  // @ts-ignore
  filteredCountries: Observable<any>;
  countries: any;
  db = getDatabase();

  languages = ['English', 'French', 'Spanish', 'German', 'Chinese'];
  currentLanguage = 'English';
  selectedTitle = '';
  selectedDescription = '';
  titleArray = ["Crystal Clear Voice Quality", "Accessible to Any Device: Android and iOS"];
  descriptionArray = ["Immerse yourself in conversations with Vinota's crystal clear voice quality. Our advanced technology ensures uninterrupted and high-quality calls. Enjoy conversations that feel like you're in the same room, no matter the distance.", "Experience the convenience and flexibility of Vinota across all your devices. Our app is designed to be compatible with various platforms, ensuring that you can enjoy seamless communication no matter which device you prefer."];
  private timer: any = 0;
  constructor(private router: Router) { }
  
  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit(): void {
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
    }, { onlyOnce: true });
    this.selectRandomTitle();
    this.timer = setInterval(() => {
      this.selectRandomTitle();
    }, 2000);
  }
  trackItems = (index: number, itemObject: any) => itemObject.id;
  private _filterStates(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((country: any) => country.name.toLowerCase().includes(filterValue));
  }
  selectRandomTitle() {
    const randomIndex = Math.floor(Math.random() * this.titleArray.length);
    this.selectedTitle = this.titleArray[randomIndex];
    this.selectedDescription = this.descriptionArray[randomIndex];
  }
  countrySelected() {
    const v = this.countryCtrl.value?.replace(/\s/, '-').toLowerCase();
    this.router.navigate(['/call-rates', v])
  }
}
