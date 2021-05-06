import { TestBed } from '@angular/core/testing';

import { AllegianceLeaderboardDataService } from './allegianceleaderboarddata.service';

describe('AllegianceleaderboarddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllegianceLeaderboardDataService = TestBed.get(AllegianceLeaderboardDataService);
    expect(service).toBeTruthy();
  });
});
