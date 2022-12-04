import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRecordCoreComponent } from './player-record-core.component';

describe('PlayerRecordCoreComponent', () => {
  let component: PlayerRecordCoreComponent;
  let fixture: ComponentFixture<PlayerRecordCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRecordCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRecordCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
