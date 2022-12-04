import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerListService } from '../../service/playerlist.service';

@Component({
  selector: 'app-player-list-autocomplete',
  templateUrl: './player-list-autocomplete.component.html',
  styleUrls: ['./player-list-autocomplete.component.scss']
})
export class PlayerListAutocompleteComponent implements OnInit, AfterViewInit {


  public playerList: string[];
  public currentSelectBoxSelection: string;

  public constructor(private readonly playerListService: PlayerListService,
    private readonly router: Router) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.playerListService.find().subscribe(data => {
      this.playerList = data.data;
    });
  }


  public playerSearch(): void {
    const playerName = this.currentSelectBoxSelection.toString();
    if (playerName.length > 0) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl('/player/' + playerName + '?refresh=true');
    }
  }

}
