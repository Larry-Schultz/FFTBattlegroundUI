import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListAutocompleteComponent } from './player-list-autocomplete.component';

describe('PlayerListAutocompleteComponent', () => {
  let component: PlayerListAutocompleteComponent;
  let fixture: ComponentFixture<PlayerListAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerListAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerListAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
