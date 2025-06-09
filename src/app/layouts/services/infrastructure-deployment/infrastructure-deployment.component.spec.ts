import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureDeploymentComponent } from './infrastructure-deployment.component';

describe('InfrastructureDeploymentComponent', () => {
  let component: InfrastructureDeploymentComponent;
  let fixture: ComponentFixture<InfrastructureDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastructureDeploymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructureDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
