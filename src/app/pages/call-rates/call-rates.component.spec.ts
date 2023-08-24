import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRatesComponent } from './call-rates.component';

describe('CallRatesComponent', () => {
  let component: CallRatesComponent;
  let fixture: ComponentFixture<CallRatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallRatesComponent]
    });
    fixture = TestBed.createComponent(CallRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
