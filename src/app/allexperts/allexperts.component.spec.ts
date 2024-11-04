import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexpertsComponent } from './allexperts.component';

describe('AllexpertsComponent', () => {
  let component: AllexpertsComponent;
  let fixture: ComponentFixture<AllexpertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllexpertsComponent]
    });
    fixture = TestBed.createComponent(AllexpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
