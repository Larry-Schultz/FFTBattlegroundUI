import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeTournamentSettingsComponent } from './meme-tournament-settings.component';

describe('MemeTournamentSettingsComponent', () => {
  let component: MemeTournamentSettingsComponent;
  let fixture: ComponentFixture<MemeTournamentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeTournamentSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeTournamentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
