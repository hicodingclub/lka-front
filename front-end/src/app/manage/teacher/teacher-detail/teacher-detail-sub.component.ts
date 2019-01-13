import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { TeacherDetailComponent } from './teacher-detail.component';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail-sub',
  templateUrl: './teacher-detail-sub.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailSubComponent extends TeacherDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        protected teacherService: TeacherService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,teacherService, commonService, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}