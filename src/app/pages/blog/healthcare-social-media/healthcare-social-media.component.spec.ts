import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareSocialMediaComponent } from './healthcare-social-media.component';

describe('HealthcareSocialMediaComponent', () => {
  let component: HealthcareSocialMediaComponent;
  let fixture: ComponentFixture<HealthcareSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareSocialMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
