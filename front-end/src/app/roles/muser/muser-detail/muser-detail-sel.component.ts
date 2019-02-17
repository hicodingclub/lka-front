import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserDetailComponent } from './muser-detail.component';
import { MuserService } from '../muser.service';

@Component({
  selector: 'app-muser-detail-sel',
  templateUrl: './muser-detail-sel.component.html',
  styleUrls: ['./muser-detail.component.css']
})
export class MuserDetailSelComponent extends MuserDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected muserService: MuserService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
       protected location: Location) {
            super(muserService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}