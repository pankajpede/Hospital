import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProductPhotographyComponent } from './professional-product-photography.component';

describe('ProfessionalProductPhotographyComponent', () => {
  let component: ProfessionalProductPhotographyComponent;
  let fixture: ComponentFixture<ProfessionalProductPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalProductPhotographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalProductPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
