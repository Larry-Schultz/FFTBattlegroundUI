import { TestBed } from '@angular/core/testing';

import { BotlandDataService } from './botlanddata.service';

describe('BotlanddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotlandDataService = TestBed.get(BotlandDataService);
    expect(service).toBeTruthy();
  });
});
