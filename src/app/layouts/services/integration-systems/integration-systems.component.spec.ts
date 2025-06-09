import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationSystemsComponent } from './integration-systems.component';

describe('IntegrationSystemsComponent', () => {
  let component: IntegrationSystemsComponent;
  let fixture: ComponentFixture<IntegrationSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
