import { TestBed } from '@angular/core/testing';

import { ActiveMapsService } from './active-maps.service';

describe('ActiveMapsService', () => {
  let service: ActiveMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
