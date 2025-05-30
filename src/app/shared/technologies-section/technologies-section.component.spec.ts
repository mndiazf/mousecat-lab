import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesSectionComponent } from './technologies-section.component';

describe('TechnologiesSectionComponent', () => {
  let component: TechnologiesSectionComponent;
  let fixture: ComponentFixture<TechnologiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
