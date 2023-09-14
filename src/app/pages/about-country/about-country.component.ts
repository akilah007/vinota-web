import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { getDatabase, onValue, ref } from "@angular/fire/database";

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
  landline_min: any;
  mobile_min: any;
  constructor(private route: ActivatedRoute) { }

   ngOnInit() {
     this.getDatabase();
  }
  getDatabase() {
    // code here
    this.route.params.subscribe((p: any) => {
      this.countryName = this.convertCountryName(p.id);
      onValue(ref(this.db, `full_rate_db/minimum_rate/${this.countryName}`), snapshot => {
        let min = snapshot.val();
        console.log(min)
        this.iso = min.iso.toLowerCase();
        onValue(ref(this.db, `/full_rate_db/all_unique_rates/${min.iso}`), async snapshot2 => {
          const unique = [];
          const u = snapshot2.val();
          console.log(u)

          for (const k in u) {
            onValue(ref(this.db, `/full_rate_db/all_call_rates/${u[k].prefix}`), snapshot3 => {
              const r: any = snapshot3.val();
              if (k !== 'sms-rate') {
                this.rates.push({ name: this.convertUniqueRates(k), rate: r.rate, usd5: r.rate, sms: !u['sms-rate'] ? 0 : u['sms-rate']['For any number'] });
                console.log(this.rates)
                // 'Landline'

                let landline = this.rates.filter(
                  (obj) => obj.name== 'Landline'
                );
                if(landline.length==1){
                  this.landline_min = 5 / landline[0].usd5;
                  this.landline_min = ~~this.landline_min;
                }
                let mobile = this.rates.filter(
                  (obj) => obj.name!= 'Landline'
                );
                const min_low = mobile.reduce((prev, curr) => {
                  return curr.usd5 < prev.usd5 ? curr : prev;
                });
                console.log(min)
                this.mobile_min = 5 / min_low.rate;
                this.mobile_min = ~~this.mobile_min;
              }
            }, { onlyOnce: true });
 
        
          }
   
        }, { onlyOnce: true })
      }, { onlyOnce: true })
    })
  }

  ngAfterViewInit() {
    window.scroll(0, 0)
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
