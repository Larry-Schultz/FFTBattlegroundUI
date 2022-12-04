import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOptionSelectorComponent } from './player-option-selector.component';

describe('PlayerOptionSelectorComponent', () => {
  let component: PlayerOptionSelectorComponent;
  let fixture: ComponentFixture<PlayerOptionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerOptionSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerOptionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
