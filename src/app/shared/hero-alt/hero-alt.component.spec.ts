import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAltComponent } from './hero-alt.component';

describe('HeroAltComponent', () => {
  let component: HeroAltComponent;
  let fixture: ComponentFixture<HeroAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
