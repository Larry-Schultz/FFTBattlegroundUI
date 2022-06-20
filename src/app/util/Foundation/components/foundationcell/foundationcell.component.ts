import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foundationcell',
  templateUrl: './foundationcell.component.html',
  styleUrls: ['./foundationcell.component.scss']
})
export class FoundationcellComponent implements OnInit {

  @Input()
  public category: string;

  @Input()
  public size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
