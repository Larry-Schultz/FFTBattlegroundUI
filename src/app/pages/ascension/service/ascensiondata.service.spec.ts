import { TestBed } from '@angular/core/testing';

import { AscensiondataService } from './ascensiondata.service';

describe('AscensiondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AscensiondataService = TestBed.get(AscensiondataService);
    expect(service).toBeTruthy();
  });
});
