import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSongCountGraphComponent } from './playlist-song-count-graph.component';

describe('PlaylistSongCountGraphComponent', () => {
  let component: PlaylistSongCountGraphComponent;
  let fixture: ComponentFixture<PlaylistSongCountGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSongCountGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSongCountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
