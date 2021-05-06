import { TestBed } from '@angular/core/testing';

import { ExpLeaderboardService } from './expleaderboard.service';

describe('ExpleaderboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpLeaderboardService = TestBed.get(ExpLeaderboardService);
    expect(service).toBeTruthy();
  });
});
