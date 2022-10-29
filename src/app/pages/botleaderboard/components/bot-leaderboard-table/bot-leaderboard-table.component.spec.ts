import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLeaderboardTableComponent } from './bot-leaderboard-table.component';

describe('BotLeaderboardTableComponent', () => {
  let component: BotLeaderboardTableComponent;
  let fixture: ComponentFixture<BotLeaderboardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotLeaderboardTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotLeaderboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
