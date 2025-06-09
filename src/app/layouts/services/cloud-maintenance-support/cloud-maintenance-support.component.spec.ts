import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMaintenanceSupportComponent } from './cloud-maintenance-support.component';

describe('CloudMaintenanceSupportComponent', () => {
  let component: CloudMaintenanceSupportComponent;
  let fixture: ComponentFixture<CloudMaintenanceSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMaintenanceSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMaintenanceSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
