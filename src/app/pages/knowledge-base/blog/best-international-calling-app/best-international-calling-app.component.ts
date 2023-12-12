import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-international-calling-app',
  templateUrl: './best-international-calling-app.component.html',
  styleUrls: ['./best-international-calling-app.component.scss']
})
export class BestInternationalCallingAppComponent {
  
  constructor(
    private router: Router,
    private metaService: Meta,
    ) { }
    
  ngOnInit(): void {
    this.metaService.updateTag({ name: 'description', content: 'Explore the ultimate guide to international calling apps with Vinota. From unbeatable prices to crystal-clear calls, discover the top apps, compare features, and stay connected affordably.' });
  }

  showMore(url:any) {
    if(url == 'cost-saving-guide'){
      this.router.navigate(['/calling-eritra'])
    }
  }
}
