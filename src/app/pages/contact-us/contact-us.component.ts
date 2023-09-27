import { Component } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Contact Vinota | Reach Out for Support and Inquiries");
    this.metaService.updateTag({ name: 'keywords', content: 'Contact Vinota,Reach Out for Support and Inquiries' });
    this.metaService.updateTag({ name: 'description', content: 'EContact Vinota`s support team for assistance with your international calling needs. We`re here to help. Get in touch today.' });
  }
}
