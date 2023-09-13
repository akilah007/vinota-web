import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent {
  public changeClass = true;

  constructor(private metaService: Meta) { }

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  ngOnInit() {
    this.metaService.updateTag({ name: 'keywords', content: 'Vinota Knowledge Base,Your Guide to Seamless Calling' });
    this.metaService.updateTag({ name: 'description', content: 'Explore Vinota`s knowledge base for tips, tricks, and insights on making the most of your international calls.' });
  }
}
