import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowDentalSurgeryComponent } from './know-dental-surgery.component';

describe('KnowDentalSurgeryComponent', () => {
  let component: KnowDentalSurgeryComponent;
  let fixture: ComponentFixture<KnowDentalSurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowDentalSurgeryComponent]
    });
    fixture = TestBed.createComponent(KnowDentalSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
