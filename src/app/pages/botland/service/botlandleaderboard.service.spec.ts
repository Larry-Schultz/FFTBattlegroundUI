import { TestBed } from '@angular/core/testing';

import { BotlandleaderboardService } from './botlandleaderboard.service';

describe('BotlandleaderboardService', () => {
  let service: BotlandleaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotlandleaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
