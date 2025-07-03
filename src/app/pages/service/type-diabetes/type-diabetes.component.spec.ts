import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDiabetesComponent } from './type-diabetes.component';

describe('TypeDiabetesComponent', () => {
  let component: TypeDiabetesComponent;
  let fixture: ComponentFixture<TypeDiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDiabetesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
