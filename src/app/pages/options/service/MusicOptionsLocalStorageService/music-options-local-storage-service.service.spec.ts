import { TestBed } from '@angular/core/testing';

import { MusicOptionsLocalStorageServiceService } from './music-options-local-storage-service.service';

describe('MusicOptionsLocalStorageServiceService', () => {
  let service: MusicOptionsLocalStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicOptionsLocalStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
