import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsComponent } from './mobile-apps.component';

describe('MobileAppsComponent', () => {
  let component: MobileAppsComponent;
  let fixture: ComponentFixture<MobileAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
