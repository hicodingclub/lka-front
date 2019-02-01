import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-sub',
  templateUrl: './class-list-sub.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListSubComponent extends ClassListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected classService: ClassService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, classService, commonService, router, route, location);
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
