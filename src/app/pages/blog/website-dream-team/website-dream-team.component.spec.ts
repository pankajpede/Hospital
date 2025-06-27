import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDreamTeamComponent } from './website-dream-team.component';

describe('WebsiteDreamTeamComponent', () => {
  let component: WebsiteDreamTeamComponent;
  let fixture: ComponentFixture<WebsiteDreamTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteDreamTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteDreamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
