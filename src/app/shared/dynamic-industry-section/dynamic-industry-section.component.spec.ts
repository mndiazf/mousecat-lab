import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicIndustrySectionComponent } from './dynamic-industry-section.component';

describe('DynamicIndustrySectionComponent', () => {
  let component: DynamicIndustrySectionComponent;
  let fixture: ComponentFixture<DynamicIndustrySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicIndustrySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicIndustrySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
