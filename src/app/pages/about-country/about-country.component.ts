import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {getDatabase, onValue, ref} from "@angular/fire/database";

@Component({
  selector: 'app-about-country',
  templateUrl: './about-country.component.html',
  styleUrls: ['./about-country.component.scss']
})
export class AboutCountryComponent implements OnInit {
  public changeClass = true;
  countryName: any;
  iso: any;
  rates: any[] = [];
  db = getDatabase();
  date = new Date();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((p: any) => {
      this.countryName = this.convertCountryName(p.id);
      onValue(ref(this.db, `full_rate_db/minimum_rate/${this.countryName}`), snapshot => {
        const min: any = snapshot.val();
        this.iso = min.iso.toLowerCase();
        onValue(ref(this.db, `/full_rate_db/all_unique_rates/${min.iso}`), snapshot2 => {
          const unique = [];
          const u = snapshot2.val();
          console.log(u);
          for (const k in u) {
            onValue(ref(this.db, `/full_rate_db/all_call_rates/${u[k].prefix}`), snapshot3 => {
              const r: any = snapshot3.val();
              if (k !== 'sms-rate') {
                this.rates.push({name: this.convertUniqueRates(k), rate: r.rate, usd5: r.rate, sms: !u['sms-rate'] ? 0 : u['sms-rate']['For any number']});
              }
            }, {onlyOnce: true});
          }
          console.log(snapshot2.val());
        }, {onlyOnce: true})
      }, {onlyOnce: true})
    });
  }
  convertUniqueRates(input: string) {
    return input.split(':')[1].trim();
  }
  convertCountryName(input: string) {
    const str = input.replace(/-/, ' ');
    return str.replace(/\b\w/g, (match) => {
      return match.toUpperCase();
    });
  }
}
