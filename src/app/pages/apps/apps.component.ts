import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
  public changeClass = true;
  selectedImage: string = 'about5s';

  constructor() { }


  changeMobileDisplay(imageName: string) {
    this.selectedImage = imageName;
  }
  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
