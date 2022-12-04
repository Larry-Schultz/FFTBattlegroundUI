import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlayerStarComponent } from './favorite-player-star.component';

describe('FavoritePlayerStarComponent', () => {
  let component: FavoritePlayerStarComponent;
  let fixture: ComponentFixture<FavoritePlayerStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePlayerStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePlayerStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
