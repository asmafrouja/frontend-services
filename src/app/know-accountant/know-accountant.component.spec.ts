import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowAccountantComponent } from './know-accountant.component';

describe('KnowAccountantComponent', () => {
  let component: KnowAccountantComponent;
  let fixture: ComponentFixture<KnowAccountantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowAccountantComponent]
    });
    fixture = TestBed.createComponent(KnowAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
