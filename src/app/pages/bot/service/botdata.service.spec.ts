import { TestBed } from '@angular/core/testing';

import { BotDataService } from './botdata.service';

describe('BotdataService', () => {
  let service: BotDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
