import { TestBed } from '@angular/core/testing';

import { PlayerListService } from './playerlist.service';

describe('PlayerlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerListService = TestBed.get(PlayerListService);
    expect(service).toBeTruthy();
  });
});
