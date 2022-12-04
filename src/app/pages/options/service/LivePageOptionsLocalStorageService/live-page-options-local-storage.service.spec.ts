import { TestBed } from '@angular/core/testing';

import { LivePageOptionsLocalStorageService } from './live-page-options-local-storage.service';

describe('LivePageOptionsLocalStorageService', () => {
  let service: LivePageOptionsLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivePageOptionsLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
