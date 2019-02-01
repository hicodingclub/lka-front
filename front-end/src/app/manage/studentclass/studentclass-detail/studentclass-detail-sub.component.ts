import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentclassDetailComponent } from './studentclass-detail.component';
import { StudentclassService } from '../studentclass.service';

@Component({
  selector: 'app-studentclass-detail-sub',
  templateUrl: './studentclass-detail-sub.component.html',
  styleUrls: ['./studentclass-detail.component.css']
})
export class StudentclassDetailSubComponent extends StudentclassDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        protected studentclassService: StudentclassService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,studentclassService, commonService, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}