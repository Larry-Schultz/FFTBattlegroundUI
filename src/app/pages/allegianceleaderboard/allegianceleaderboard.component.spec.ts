import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllegianceLeaderboardComponent } from './allegianceleaderboard.component';

describe('AllegianceleaderboardComponent', () => {
  let component: AllegianceLeaderboardComponent;
  let fixture: ComponentFixture<AllegianceLeaderboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegianceLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegianceLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
