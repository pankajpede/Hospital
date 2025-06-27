import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurjourneyComponent } from './ourjourney.component';

describe('OurjourneyComponent', () => {
  let component: OurjourneyComponent;
  let fixture: ComponentFixture<OurjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurjourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
