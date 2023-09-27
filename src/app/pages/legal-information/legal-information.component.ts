import { Component } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.scss']
})
export class LegalInformationComponent {
  public changeClass = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Legal Information");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota,Legal Information' });
    this.metaService.updateTag({ name: 'description', content: 'Explore Vinota`s legal information, including company details.' });
  }
}
