import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapImageComponent } from './mapimage.component';

describe('MapimageComponent', () => {
  let component: MapImageComponent;
  let fixture: ComponentFixture<MapImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
