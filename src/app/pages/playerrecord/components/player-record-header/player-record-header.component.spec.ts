import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRecordHeaderComponent } from './player-record-header.component';

describe('PlayerRecordHeaderComponent', () => {
  let component: PlayerRecordHeaderComponent;
  let fixture: ComponentFixture<PlayerRecordHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRecordHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRecordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
