import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudConsultingComponent } from './cloud-consulting.component';

describe('CloudConsultingComponent', () => {
  let component: CloudConsultingComponent;
  let fixture: ComponentFixture<CloudConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
