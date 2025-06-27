import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingPhaseComponent } from './betting-phase.component';

describe('BettingPhaseComponent', () => {
  let component: BettingPhaseComponent;
  let fixture: ComponentFixture<BettingPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingPhaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BettingPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
