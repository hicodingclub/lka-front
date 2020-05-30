import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TeacherDetailComponent } from './teacher-detail.component';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail-sub',
  templateUrl: './teacher-detail-sub.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailSubComponent extends TeacherDetailComponent 
        implements OnInit {
    // @Input() inputData;
    
    constructor(
        public teacherService: TeacherService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,teacherService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }

    ngAfterViewInit() {
    }
}
