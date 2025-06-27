import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialMarketingPowerComponent } from './industrial-marketing-power.component';

describe('IndustrialMarketingPowerComponent', () => {
  let component: IndustrialMarketingPowerComponent;
  let fixture: ComponentFixture<IndustrialMarketingPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialMarketingPowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialMarketingPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
