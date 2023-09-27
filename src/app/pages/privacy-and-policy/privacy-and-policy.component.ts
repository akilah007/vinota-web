import { Component } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-and-policy',
  templateUrl: './privacy-and-policy.component.html',
  styleUrls: ['./privacy-and-policy.component.scss']
})
export class PrivacyAndPolicyComponent {
  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Privacy Policy");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota, Privacy Policy' });
    this.metaService.updateTag({ name: 'description', content: 'Your privacy matters to us. Read Vinota`s Privacy Policy to understand how we protect your data while using our international calling app.' });
  }
}
