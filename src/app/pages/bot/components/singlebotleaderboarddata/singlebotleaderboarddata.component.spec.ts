import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBotLeaderboardDataComponent } from './singlebotleaderboarddata.component';

describe('SinglebotleaderboarddataComponent', () => {
  let component: SingleBotLeaderboardDataComponent;
  let fixture: ComponentFixture<SingleBotLeaderboardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBotLeaderboardDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBotLeaderboardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
