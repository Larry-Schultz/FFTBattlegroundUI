import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightPhaseComponent } from './fight-phase.component';

describe('FightPhaseComponent', () => {
  let component: FightPhaseComponent;
  let fixture: ComponentFixture<FightPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightPhaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
