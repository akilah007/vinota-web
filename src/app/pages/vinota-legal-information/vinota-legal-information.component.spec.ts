import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinotaLegalInformationComponent } from './vinota-legal-information.component';

describe('VinotaLegalInformationComponent', () => {
  let component: VinotaLegalInformationComponent;
  let fixture: ComponentFixture<VinotaLegalInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinotaLegalInformationComponent]
    });
    fixture = TestBed.createComponent(VinotaLegalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
