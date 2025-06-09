import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSoftwareComponent } from './custom-software.component';

describe('CustomSoftwareComponent', () => {
  let component: CustomSoftwareComponent;
  let fixture: ComponentFixture<CustomSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
