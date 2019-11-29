import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteService } from '../keynote.service';
import { KeynoteDetailComponent } from './keynote-detail.component';




@Component({
  selector: 'app-keynote-detail-widget-slide',
  templateUrl: './keynote-detail-widget-slide.component.html',
  styleUrls: ['./keynote-detail.component.css', './keynote-detail-widget-slide.component.css']
})
export class KeynoteDetailWidgetSlideComponent extends KeynoteDetailComponent implements OnInit, AfterViewInit {
  constructor(
      
      public keynoteService: KeynoteService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                keynoteService, injector, router, route, location);
  }

  ngOnInit() {
      super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}
