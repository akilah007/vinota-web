import { Component} from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public changeClass = true;

  constructor(private metaService: Meta) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.metaService.updateTag({ name: 'keywords', content: 'About Vinota,Your Trusted International Calling Companion' });
    this.metaService.updateTag({ name: 'description', content: 'Learn about Vinota, your trusted international calling solution. Discover our journey, values, and commitment to providing top-notch international calling services.' });
  }
}
