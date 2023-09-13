import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public changeClass = true;

  constructor(private metaService: Meta) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota FAQ,Answers to Your International Calling Queries' });
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Vinota`s services and international calling solutions.' });
  }
}
