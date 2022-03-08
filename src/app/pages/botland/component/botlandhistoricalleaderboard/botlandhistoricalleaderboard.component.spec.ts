import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotlandHistoricalLeaderboardComponent } from './botlandhistoricalleaderboard.component';

describe('BotlandhistoricalleaderboardComponent', () => {
  let component: BotlandHistoricalLeaderboardComponent;
  let fixture: ComponentFixture<BotlandHistoricalLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotlandHistoricalLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotlandHistoricalLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
