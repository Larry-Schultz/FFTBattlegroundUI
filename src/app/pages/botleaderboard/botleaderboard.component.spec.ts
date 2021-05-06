import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLeaderboardComponent } from './botleaderboard.component';

describe('BotleaderboardComponent', () => {
  let component: BotLeaderboardComponent;
  let fixture: ComponentFixture<BotLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
