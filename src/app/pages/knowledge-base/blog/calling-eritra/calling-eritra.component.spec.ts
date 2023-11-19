import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingEritraComponent } from './calling-eritra.component';

describe('CallingEritraComponent', () => {
  let component: CallingEritraComponent;
  let fixture: ComponentFixture<CallingEritraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallingEritraComponent]
    });
    fixture = TestBed.createComponent(CallingEritraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
