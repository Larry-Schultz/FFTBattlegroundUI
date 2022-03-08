import { TestBed } from '@angular/core/testing';

import { BotLeaderboardSingleBotDataService } from './botleaderboardsinglebotdata.service';

describe('BotleaderboardsinglebotdataService', () => {
  let service: BotLeaderboardSingleBotDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotLeaderboardSingleBotDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
