import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { TeacherListComponent } from './teacher-list.component';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list-sub',
  templateUrl: './teacher-list-sub.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListSubComponent extends TeacherListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, teacherService, commonService, router, route, location);
  }

  ngOnInit() {
      let ref = this.getParentRouteRefField();
      let id = this.getParentRouteItemId();
      this.parentData[ref] = {'_id': id };
      this.detail = {};
      this.detail[ref] = {'_id': id }; //make this as the search context
      this.processSearchContext();
      this.populateList();
  }
}
