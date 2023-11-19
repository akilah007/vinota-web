import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public changeClass = true;

  constructor(private metaService: Meta,private titleService: Title) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Explore the Frequently Asked Questions");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota FAQ,Answers to Your International Calling Queries' });
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Vinota`s services and international calling solutions.' });
  }
}
