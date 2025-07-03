import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NephropathyComponent } from './nephropathy.component';

describe('NephropathyComponent', () => {
  let component: NephropathyComponent;
  let fixture: ComponentFixture<NephropathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NephropathyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NephropathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
