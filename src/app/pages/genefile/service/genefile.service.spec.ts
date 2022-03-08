import { TestBed } from '@angular/core/testing';

import { GeneFileService } from './genefile.service';

describe('GenefileService', () => {
  let service: GeneFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
