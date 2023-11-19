import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-security-policy',
  templateUrl: './security-policy.component.html',
  styleUrls: ['./security-policy.component.scss']
})
export class SecurityPolicyComponent {
  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Our Security Policy");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota,Security Policy' });
    this.metaService.updateTag({ name: 'description', content: 'Security is our priority. Learn about Vinota`s Security Policy and measures we take to ensure your safety while making international calls.' });
  }
}
