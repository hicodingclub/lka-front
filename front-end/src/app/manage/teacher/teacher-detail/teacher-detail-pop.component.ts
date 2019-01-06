import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { TeacherDetailComponent } from './teacher-detail.component';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail-pop',
  templateUrl: './teacher-detail-pop.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailPopComponent extends TeacherDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected teacherService: TeacherService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(teacherService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}