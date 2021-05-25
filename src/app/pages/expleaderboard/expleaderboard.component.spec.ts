import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpLeaderboardComponent } from './expleaderboard.component';

describe('ExpleaderboardComponent', () => {
  let component: ExpLeaderboardComponent;
  let fixture: ComponentFixture<ExpLeaderboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
