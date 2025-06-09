import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSolutionsDesignComponent } from './cloud-solutions-design.component';

describe('CloudSolutionsDesignComponent', () => {
  let component: CloudSolutionsDesignComponent;
  let fixture: ComponentFixture<CloudSolutionsDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSolutionsDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSolutionsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
