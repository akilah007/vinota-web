import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-depletion-policy',
  templateUrl: './data-depletion-policy.component.html',
  styleUrls: ['./data-depletion-policy.component.scss']
})
export class DataDepletionPolicyComponent {
  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Data Depletion Policy");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota,Data Depletion Policy' });
    this.metaService.updateTag({ name: 'description', content: 'Discover Vinota`s Data Depletion Policy. Understand how we manage and protect your data usage when using our app.' });
  }
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
