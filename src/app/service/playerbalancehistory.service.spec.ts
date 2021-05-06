import { TestBed } from '@angular/core/testing';

import { PlayerBalanceHistoryService } from './playerbalancehistory.service';

describe('PlayerbalancehistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerBalanceHistoryService = TestBed.get(PlayerBalanceHistoryService);
    expect(service).toBeTruthy();
  });
});
