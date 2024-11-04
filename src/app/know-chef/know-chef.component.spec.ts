import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowChefComponent } from './know-chef.component';

describe('KnowChefComponent', () => {
  let component: KnowChefComponent;
  let fixture: ComponentFixture<KnowChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowChefComponent]
    });
    fixture = TestBed.createComponent(KnowChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
