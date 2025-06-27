import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPhaseComponent } from './match-phase.component';

describe('MatchPhaseComponent', () => {
  let component: MatchPhaseComponent;
  let fixture: ComponentFixture<MatchPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPhaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
