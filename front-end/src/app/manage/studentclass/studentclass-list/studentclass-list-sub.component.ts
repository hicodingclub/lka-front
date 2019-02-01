import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentclassListComponent } from './studentclass-list.component';
import { StudentclassService } from '../studentclass.service';

@Component({
  selector: 'app-studentclass-list-sub',
  templateUrl: './studentclass-list-sub.component.html',
  styleUrls: ['./studentclass-list.component.css']
})
export class StudentclassListSubComponent extends StudentclassListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected studentclassService: StudentclassService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, studentclassService, commonService, router, route, location);
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
