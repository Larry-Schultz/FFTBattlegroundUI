import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneFileService } from './service/genefile.service';

@Component({
  selector: 'app-genefile',
  templateUrl: './genefile.component.html',
  styleUrls: ['./genefile.component.css']
})
export class GeneFileComponent implements OnInit {

  public genefileData: string;

  constructor(private activatedRoute: ActivatedRoute, private geneFileService: GeneFileService) {
    this.activatedRoute.params.subscribe(params => {
      this.geneFileService.find(params.genefile).subscribe(data => {
        this.genefileData = data;
      });
    });
  }

  ngOnInit(): void {
  }

}
