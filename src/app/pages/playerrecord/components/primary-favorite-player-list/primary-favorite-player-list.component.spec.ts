import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFavoritePlayerListComponent } from './primary-favorite-player-list.component';

describe('PrimaryFavoritePlayerListComponent', () => {
  let component: PrimaryFavoritePlayerListComponent;
  let fixture: ComponentFixture<PrimaryFavoritePlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryFavoritePlayerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryFavoritePlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
