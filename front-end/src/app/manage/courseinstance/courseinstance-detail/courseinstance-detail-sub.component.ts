import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceDetailComponent } from './courseinstance-detail.component';
import { CourseinstanceService } from '../courseinstance.service';

@Component({
  selector: 'app-courseinstance-detail-sub',
  templateUrl: './courseinstance-detail-sub.component.html',
  styleUrls: ['./courseinstance-detail.component.css']
})
export class CourseinstanceDetailSubComponent extends CourseinstanceDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        protected courseinstanceService: CourseinstanceService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,courseinstanceService, commonService, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}