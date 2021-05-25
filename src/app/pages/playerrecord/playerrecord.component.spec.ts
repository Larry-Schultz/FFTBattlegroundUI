import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerRecordComponent } from './playerrecord.component';

describe('PlayerrecordComponent', () => {
  let component: PlayerRecordComponent;
  let fixture: ComponentFixture<PlayerRecordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
