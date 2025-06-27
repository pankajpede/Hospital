import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWebdevComponent } from './service-webdev.component';

describe('ServiceWebdevComponent', () => {
  let component: ServiceWebdevComponent;
  let fixture: ComponentFixture<ServiceWebdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWebdevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
