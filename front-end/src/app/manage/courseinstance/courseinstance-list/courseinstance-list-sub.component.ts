import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceListComponent } from './courseinstance-list.component';
import { CourseinstanceService } from '../courseinstance.service';

@Component({
  selector: 'app-courseinstance-list-sub',
  templateUrl: './courseinstance-list-sub.component.html',
  styleUrls: ['./courseinstance-list.component.css']
})
export class CourseinstanceListSubComponent extends CourseinstanceListComponent implements OnInit {
  constructor(
      protected courseinstanceService: CourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, courseinstanceService, commonService, router, route, location);
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
