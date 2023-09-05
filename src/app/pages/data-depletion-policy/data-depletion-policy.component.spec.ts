import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDepletionPolicyComponent } from './data-depletion-policy.component';

describe('DataDepletionPolicyComponent', () => {
  let component: DataDepletionPolicyComponent;
  let fixture: ComponentFixture<DataDepletionPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataDepletionPolicyComponent]
    });
    fixture = TestBed.createComponent(DataDepletionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
