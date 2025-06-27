import { TestBed } from '@angular/core/testing';

import { MapPageService } from './map-page.service';

describe('MapPageService', () => {
  let service: MapPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
