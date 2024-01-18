import { Component } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vinota-privacy-and-policy',
  templateUrl: './vinota-privacy-and-policy.component.html',
  styleUrls: ['./vinota-privacy-and-policy.component.scss']
})
export class VinotaPrivacyAndPolicyComponent {
  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Our Privacy Policy");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota, Privacy Policy' });
    this.metaService.updateTag({ name: 'description', content: 'Your privacy matters to us. Read Vinota`s Privacy Policy to understand how we protect your data while using our international calling app.' });
  }
}
