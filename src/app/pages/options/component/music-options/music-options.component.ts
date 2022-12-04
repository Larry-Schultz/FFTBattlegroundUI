import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { MusicOptionsLocalStorageServiceService } from '../../service/MusicOptionsLocalStorageService/music-options-local-storage-service.service';

@Component({
  selector: 'app-music-options',
  templateUrl: './music-options.component.html',
  styleUrls: ['./music-options.component.scss']
})
export class MusicOptionsComponent implements OnInit, OnChanges {

  public checked = false;

  public constructor(private readonly musicOptionsLocalStorageServiceService: MusicOptionsLocalStorageServiceService) {
    this.checked = this.musicOptionsLocalStorageServiceService.isSearch();
  }

  public ngOnInit(): void {

  }

  public ngOnChanges(changes: SimpleChanges): void {

  }

  public changeSearchOption(matSlideToggleChange: MatSlideToggleChange): void {
    this.checked = matSlideToggleChange.checked;
    this.musicOptionsLocalStorageServiceService.setSearch(matSlideToggleChange.checked);
  }

}
