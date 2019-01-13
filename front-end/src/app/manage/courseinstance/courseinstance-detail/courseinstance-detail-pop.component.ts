import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceDetailComponent } from './courseinstance-detail.component';
import { CourseinstanceService } from '../courseinstance.service';

@Component({
  selector: 'app-courseinstance-detail-pop',
  templateUrl: './courseinstance-detail-pop.component.html',
  styleUrls: ['./courseinstance-detail.component.css']
})
export class CourseinstanceDetailPopComponent extends CourseinstanceDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected courseinstanceService: CourseinstanceService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,courseinstanceService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}