import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-why-vinota',
  templateUrl: './why-vinota.component.html',
  styleUrls: ['./why-vinota.component.scss']
})
export class WhyVinotaComponent {
  public changeClass = true;
  isActive = 1;

  constructor(private metaService: Meta) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.metaService.updateTag({ name: 'keywords', content: 'Why we Choose Vinota for International Calling?' });
    this.metaService.updateTag({ name: 'description', content: 'Discover why Vinota is your best choice for international calls. Quality, affordability, and convenience in one app.' });
  }
  next() {
    if (this.isActive == 3) this.isActive = 0;
    this.isActive++;
  }
  pre() {
    this.isActive--;
    if (this.isActive == 0) this.isActive = 3;
  }
}
