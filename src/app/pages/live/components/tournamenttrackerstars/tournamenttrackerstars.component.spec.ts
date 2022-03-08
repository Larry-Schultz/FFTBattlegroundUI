import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTrackerStarsComponent } from './tournamenttrackerstars.component';

describe('TournamenttrackerstarsComponent', () => {
  let component: TournamentTrackerStarsComponent;
  let fixture: ComponentFixture<TournamentTrackerStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentTrackerStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTrackerStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
