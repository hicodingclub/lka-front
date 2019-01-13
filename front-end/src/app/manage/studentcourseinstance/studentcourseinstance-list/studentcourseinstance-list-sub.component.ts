import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentcourseinstanceListComponent } from './studentcourseinstance-list.component';
import { StudentcourseinstanceService } from '../studentcourseinstance.service';

@Component({
  selector: 'app-studentcourseinstance-list-sub',
  templateUrl: './studentcourseinstance-list-sub.component.html',
  styleUrls: ['./studentcourseinstance-list.component.css']
})
export class StudentcourseinstanceListSubComponent extends StudentcourseinstanceListComponent implements OnInit {
  constructor(
      protected studentcourseinstanceService: StudentcourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, studentcourseinstanceService, commonService, router, route, location);
  }

  ngOnInit() {
      let ref = this.getParentRouteRefField();
      let id = this.getParentRouteItemId();
      this.detail = {};
      this.detail[ref] = {'_id': id }; //make this as the search context
      this.processSearchContext();
      this.populateList();
  }
}
