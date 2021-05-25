import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapNumberComponent } from './mapnumber.component';

describe('MapnumberComponent', () => {
  let component: MapNumberComponent;
  let fixture: ComponentFixture<MapNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
