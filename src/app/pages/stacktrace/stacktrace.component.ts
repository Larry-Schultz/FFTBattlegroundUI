import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {StacktraceService} from 'src/app/pages/stacktrace/service/stacktrace.service';

@Component({
  selector: 'app-stacktrace',
  templateUrl: './stacktrace.component.html',
  styleUrls: ['./stacktrace.component.scss']
})
export class StacktraceComponent implements OnInit, OnChanges {

  public stackTrace: string;

  public constructor(private stacktraceService: StacktraceService, private activatedRoute: ActivatedRoute) {
    
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id: number = params.id;
      this.stacktraceService.find(id).subscribe(data => {
        this.stackTrace = data.data;
      });
    });
  }

  public ngOnChanges(): void {

  }

}
