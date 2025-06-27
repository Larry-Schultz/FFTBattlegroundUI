import { TestBed } from '@angular/core/testing';

import { PlaylistSongCountService } from './playlist-song-count.service';

describe('PlaylistSongCountService', () => {
  let service: PlaylistSongCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistSongCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
