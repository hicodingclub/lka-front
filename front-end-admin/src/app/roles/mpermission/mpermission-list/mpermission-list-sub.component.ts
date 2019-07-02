import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpermissionListComponent } from './mpermission-list.component';
import { MpermissionService } from '../mpermission.service';

@Component({
  selector: 'app-mpermission-list-sub',
  templateUrl: './mpermission-list-sub.component.html',
  styleUrls: ['./mpermission-list.component.css']
})
export class MpermissionListSubComponent extends MpermissionListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected mpermissionService: MpermissionService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, mpermissionService, injector, router, route, location);
  }

  ngOnInit() {
      let ref = this.getParentRouteRefField();
      let id = this.getParentRouteItemId();
      this.detail = {};

      if (this.arrayFields.some(x=>x[0] == ref)) {
          this.parentData[ref] = {'selection':[{'_id': id}] }; 
          this.detail[ref] = {'selection':[{'_id': id}] }; //search on array list
      } else {
          this.parentData[ref] = {'_id': id };
          this.detail[ref] = {'_id': id }; //make this as the search context
      }
      this.searchList();
  }
}
