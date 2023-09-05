import { Component} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public changeClass = true;

  constructor() { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }
}
