import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePpcComponent } from './service-ppc.component';

describe('ServicePpcComponent', () => {
  let component: ServicePpcComponent;
  let fixture: ComponentFixture<ServicePpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
