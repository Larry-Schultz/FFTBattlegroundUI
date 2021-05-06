import { TestBed } from '@angular/core/testing';

import { BotLeaderboardDataService } from './botleaderboarddata.service';

describe('BotleaderboarddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotLeaderboardDataService = TestBed.get(BotLeaderboardDataService);
    expect(service).toBeTruthy();
  });
});
