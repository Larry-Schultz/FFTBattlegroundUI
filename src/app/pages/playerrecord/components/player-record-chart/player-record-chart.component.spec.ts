import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRecordChartComponent } from './player-record-chart.component';

describe('PlayerRecordChartComponent', () => {
  let component: PlayerRecordChartComponent;
  let fixture: ComponentFixture<PlayerRecordChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRecordChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRecordChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
