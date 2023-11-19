import { Component } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Explore the Terms and Conditions");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota,Terms and Conditions' });
    this.metaService.updateTag({ name: 'description', content: 'Explore Vinota`s Terms and Conditions for using our international calling app' });
  }
}
