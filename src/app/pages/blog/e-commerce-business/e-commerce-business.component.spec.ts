import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceBusinessComponent } from './e-commerce-business.component';

describe('ECommerceBusinessComponent', () => {
  let component: ECommerceBusinessComponent;
  let fixture: ComponentFixture<ECommerceBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
