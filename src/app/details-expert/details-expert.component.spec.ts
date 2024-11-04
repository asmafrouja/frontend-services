import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExpertComponent } from './details-expert.component';

describe('DetailsExpertComponent', () => {
  let component: DetailsExpertComponent;
  let fixture: ComponentFixture<DetailsExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsExpertComponent]
    });
    fixture = TestBed.createComponent(DetailsExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
