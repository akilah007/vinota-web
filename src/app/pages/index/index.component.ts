import { Component, ViewChild, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { JsServiceService } from '../../services/js-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public changeClass = true;
  imageURL = environment.imageURL;


  constructor(private viewportScroller: ViewportScroller, private dynamicScriptLoader: JsServiceService) { }


  ngOnInit(): void {
    this.loadScripts();
  }
  public navigateToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.changeClass = !this.changeClass;
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('carousel', 'quick-form', 'wow', 'bootstrap', 'lunar', 'popper'
      , 'menu','custom')
      .then(data => {
        // Script Loaded Successfully
      }).catch(error => console.log(error));
  }
}
