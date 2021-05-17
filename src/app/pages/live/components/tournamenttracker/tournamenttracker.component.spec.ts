import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTrackerComponent } from './tournamenttracker.component';

describe('TournamenttrackerComponent', () => {
  let component: TournamentTrackerComponent;
  let fixture: ComponentFixture<TournamentTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
