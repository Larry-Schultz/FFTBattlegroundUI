import { TestBed } from '@angular/core/testing';

import { ViewerLocalStorageServiceService } from './viewer-local-storage-service.service';

describe('ViewerLocalStorageServiceService', () => {
  let service: ViewerLocalStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewerLocalStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
