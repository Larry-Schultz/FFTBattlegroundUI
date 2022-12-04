import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlayerOptionComponent } from './favorite-player-option.component';

describe('FavoritePlayerOptionComponent', () => {
  let component: FavoritePlayerOptionComponent;
  let fixture: ComponentFixture<FavoritePlayerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePlayerOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePlayerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
