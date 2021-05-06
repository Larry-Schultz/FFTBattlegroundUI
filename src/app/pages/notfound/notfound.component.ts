import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotFoundComponent implements OnInit {
  pageName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.pageName = this.router.url;
  }

}
