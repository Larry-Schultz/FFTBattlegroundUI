import { TestBed } from '@angular/core/testing';

import { OptionsPageService } from './options-page-service.service';

describe('OptionsPageServiceService', () => {
  let service: OptionsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
