import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BetentryComponent } from './betentry.component';

describe('BetentryComponent', () => {
  let component: BetentryComponent;
  let fixture: ComponentFixture<BetentryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BetentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
