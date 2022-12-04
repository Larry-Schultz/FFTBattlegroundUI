import { TestBed } from '@angular/core/testing';

import { PlayerOptionsLocalStorageServiceService } from './player-options-local-storage-service.service';

describe('PlayerOptionsLocalStorageServiceService', () => {
  let service: PlayerOptionsLocalStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerOptionsLocalStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
