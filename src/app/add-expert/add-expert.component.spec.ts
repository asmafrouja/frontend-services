import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpertComponent } from './add-expert.component';

describe('AddExpertComponent', () => {
  let component: AddExpertComponent;
  let fixture: ComponentFixture<AddExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExpertComponent]
    });
    fixture = TestBed.createComponent(AddExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
