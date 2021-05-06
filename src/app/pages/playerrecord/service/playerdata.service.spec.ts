import { TestBed } from '@angular/core/testing';

import { PlayerDataService } from './playerdata.service';

describe('PlayerdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerDataService = TestBed.get(PlayerDataService);
    expect(service).toBeTruthy();
  });
});
