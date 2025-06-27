import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gpt4oComponent } from './gpt4o.component';

describe('Gpt4oComponent', () => {
  let component: Gpt4oComponent;
  let fixture: ComponentFixture<Gpt4oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gpt4oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gpt4oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
