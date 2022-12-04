import { TestBed } from '@angular/core/testing';

import { ActivePortraitsService } from './active-portraits.service';

describe('ActivePortraitsService', () => {
  let service: ActivePortraitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePortraitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
