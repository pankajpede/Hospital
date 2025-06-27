import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContentMarketingComponent } from './service-content-marketing.component';

describe('ServiceContentMarketingComponent', () => {
  let component: ServiceContentMarketingComponent;
  let fixture: ComponentFixture<ServiceContentMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceContentMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContentMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
