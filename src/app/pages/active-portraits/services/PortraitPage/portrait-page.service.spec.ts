import { TestBed } from '@angular/core/testing';

import { PortraitPageService } from './portrait-page.service';

describe('PortraitPageService', () => {
  let service: PortraitPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortraitPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
