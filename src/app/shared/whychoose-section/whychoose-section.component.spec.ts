import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhychooseSectionComponent } from './whychoose-section.component';

describe('WhychooseSectionComponent', () => {
  let component: WhychooseSectionComponent;
  let fixture: ComponentFixture<WhychooseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhychooseSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhychooseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
