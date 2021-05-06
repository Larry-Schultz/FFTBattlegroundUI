import { TestBed } from '@angular/core/testing';

import { PlayerLeaderboardDataService } from './playerleaderboarddata.service';

describe('PlayerleaderboarddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerLeaderboardDataService = TestBed.get(PlayerLeaderboardDataService);
    expect(service).toBeTruthy();
  });
});
