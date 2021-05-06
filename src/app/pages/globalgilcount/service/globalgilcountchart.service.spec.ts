import { TestBed } from '@angular/core/testing';

import { GlobalGilCountChartService } from './globalgilcountchart.service';

describe('GlobalgilcountchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalGilCountChartService = TestBed.get(GlobalGilCountChartService);
    expect(service).toBeTruthy();
  });
});
