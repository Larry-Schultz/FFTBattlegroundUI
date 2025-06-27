import { TestBed } from '@angular/core/testing';

import { PlaylistSongOccurenceCountService } from './playlist-song-occurence-count.service';

describe('PlaylistSongOccurenceCountService', () => {
  let service: PlaylistSongOccurenceCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistSongOccurenceCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
