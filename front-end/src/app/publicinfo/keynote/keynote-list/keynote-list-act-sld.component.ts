import { Component, OnInit, AfterViewInit, OnChanges, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteListComponent } from './keynote-list.component';
import { KeynoteService } from '../keynote.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-keynote-list-act-sld',
  templateUrl: './keynote-list-act-sld.component.html',
  styleUrls: ['./keynote-list.component.css'],
})
export class KeynoteListActSldComponent extends KeynoteListComponent implements OnInit, OnChanges {
  public titleFn: string;
  public subtitleFn: string;
  public descriptionFn: string;
  public picturelinkFn: string;

  public slidesId: string = Date.now().toString();

  @ViewChild('carousel') carousel: NgbCarousel;

  constructor(
      public keynoteService: KeynoteService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( keynoteService, injector, router, route, location);
  }

  ngOnInit() {
    // this.inputData == this.inputData|| [] // expect field name in array: ['subtitle', 'description', 'picture']
    if ( !Array.isArray(this.inputData) || this.inputData.length < 4) {
      console.error("inputData of array is expected for slides view");
      return;
    }

    this.titleFn = this.inputData[0];
    this.subtitleFn = this.inputData[1];
    this.descriptionFn = this.inputData[2];
    this.picturelinkFn = this.inputData[3];

    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchDetailReady = true;
    this.searchList();
  }

  ngOnChanges() {
    if (this.carousel) {
      this.carousel.cycle();
    }
  }
}
