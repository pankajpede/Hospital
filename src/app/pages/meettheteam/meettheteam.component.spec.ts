import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeettheteamComponent } from './meettheteam.component';

describe('MeettheteamComponent', () => {
  let component: MeettheteamComponent;
  let fixture: ComponentFixture<MeettheteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeettheteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeettheteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
