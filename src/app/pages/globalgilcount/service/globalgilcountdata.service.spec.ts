import { TestBed } from '@angular/core/testing';

import { GlobalGilCountDataService } from './globalgilcountdata.service';

describe('GlobalgilcountdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalGilCountDataService = TestBed.get(GlobalGilCountDataService);
    expect(service).toBeTruthy();
  });
});
