import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMarketingDesignerComponent } from './know-marketing-designer.component';

describe('KnowMarketingDesignerComponent', () => {
  let component: KnowMarketingDesignerComponent;
  let fixture: ComponentFixture<KnowMarketingDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowMarketingDesignerComponent]
    });
    fixture = TestBed.createComponent(KnowMarketingDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
