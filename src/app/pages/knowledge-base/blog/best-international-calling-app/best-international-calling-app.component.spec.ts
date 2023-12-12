import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestInternationalCallingAppComponent } from './best-international-calling-app.component';

describe('BestInternationalCallingAppComponent', () => {
  let component: BestInternationalCallingAppComponent;
  let fixture: ComponentFixture<BestInternationalCallingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestInternationalCallingAppComponent]
    });
    fixture = TestBed.createComponent(BestInternationalCallingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
