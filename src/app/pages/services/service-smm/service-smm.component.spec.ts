import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSmmComponent } from './service-smm.component';

describe('ServiceSmmComponent', () => {
  let component: ServiceSmmComponent;
  let fixture: ComponentFixture<ServiceSmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSmmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
