import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowInteriorDesignerComponent } from './know-interior-designer.component';

describe('KnowInteriorDesignerComponent', () => {
  let component: KnowInteriorDesignerComponent;
  let fixture: ComponentFixture<KnowInteriorDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowInteriorDesignerComponent]
    });
    fixture = TestBed.createComponent(KnowInteriorDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
