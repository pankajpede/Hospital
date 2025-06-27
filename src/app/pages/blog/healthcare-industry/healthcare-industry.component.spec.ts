import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareIndustryComponent } from './healthcare-industry.component';

describe('HealthcareIndustryComponent', () => {
  let component: HealthcareIndustryComponent;
  let fixture: ComponentFixture<HealthcareIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareIndustryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
