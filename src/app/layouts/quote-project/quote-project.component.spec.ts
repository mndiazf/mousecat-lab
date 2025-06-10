import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteProjectComponent } from './quote-project.component';

describe('QuoteProjectComponent', () => {
  let component: QuoteProjectComponent;
  let fixture: ComponentFixture<QuoteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
