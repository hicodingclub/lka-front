import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseDetailComponent } from './course-detail.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail-sel',
  templateUrl: './course-detail-sel.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailSelComponent extends CourseDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected courseService: CourseService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
       protected location: Location) {
            super(courseService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}