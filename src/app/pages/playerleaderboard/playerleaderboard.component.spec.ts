import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerLeaderboardComponent } from './playerleaderboard.component';

describe('PlayerleaderboardComponent', () => {
  let component: PlayerLeaderboardComponent;
  let fixture: ComponentFixture<PlayerLeaderboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
