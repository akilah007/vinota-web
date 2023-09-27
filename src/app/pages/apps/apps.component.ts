import { Component } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {

  public changeClass = true;
  selectedImage: string = 'about5s';

  constructor(
    private metaService: Meta,
    private titleService: Title
    ) { }

  ngOnInit() {
    this.titleService.setTitle("Vinota | Best International Calling App");
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota,Best International Calling App' });
    this.metaService.updateTag({ name: 'description', content: 'Download Vinota`s Android and iOS apps for high-quality international calls. Make international calls from anywhere with ease. Stay connected with Vinota.' });
  }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  changeMobileDisplay(imageName: string) {
    this.selectedImage = imageName;
  }

}
