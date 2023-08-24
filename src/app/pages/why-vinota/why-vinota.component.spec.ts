import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVinotaComponent } from './why-vinota.component';

describe('WhyVinotaComponent', () => {
  let component: WhyVinotaComponent;
  let fixture: ComponentFixture<WhyVinotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyVinotaComponent]
    });
    fixture = TestBed.createComponent(WhyVinotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
