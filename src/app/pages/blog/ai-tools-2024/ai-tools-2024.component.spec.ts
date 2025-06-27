import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTools2024Component } from './ai-tools-2024.component';

describe('AiTools2024Component', () => {
  let component: AiTools2024Component;
  let fixture: ComponentFixture<AiTools2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTools2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTools2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
