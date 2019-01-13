import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentcourseinstanceDetailComponent } from './studentcourseinstance-detail.component';
import { StudentcourseinstanceService } from '../studentcourseinstance.service';

@Component({
  selector: 'app-studentcourseinstance-detail-sub',
  templateUrl: './studentcourseinstance-detail-sub.component.html',
  styleUrls: ['./studentcourseinstance-detail.component.css']
})
export class StudentcourseinstanceDetailSubComponent extends StudentcourseinstanceDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        protected studentcourseinstanceService: StudentcourseinstanceService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,studentcourseinstanceService, commonService, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}