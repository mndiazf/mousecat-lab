import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSupportMaintenanceComponent } from './software-support-maintenance.component';

describe('SoftwareSupportMaintenanceComponent', () => {
  let component: SoftwareSupportMaintenanceComponent;
  let fixture: ComponentFixture<SoftwareSupportMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareSupportMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareSupportMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
