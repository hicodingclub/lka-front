import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TermsService } from '../terms.service';
import { TermsDetailComponent } from './terms-detail.component';




@Component({
  selector: 'app-terms-detail-widget-term',
  templateUrl: './terms-detail-widget-term.component.html',
  styleUrls: ['./terms-detail.component.css', './terms-detail-widget-term.component.css']
})
export class TermsDetailWidgetTermComponent extends TermsDetailComponent implements OnInit, AfterViewInit {
  constructor(
      
      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                termsService, injector, router, route, location);
  }

  ngOnInit() {
      super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}
