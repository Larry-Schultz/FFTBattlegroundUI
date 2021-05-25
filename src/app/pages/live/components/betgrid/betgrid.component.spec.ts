import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BetGridComponent } from './betgrid.component';

describe('BetgridComponent', () => {
  let component: BetGridComponent;
  let fixture: ComponentFixture<BetGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BetGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
