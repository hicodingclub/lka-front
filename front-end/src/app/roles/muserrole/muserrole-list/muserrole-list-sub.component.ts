import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserroleListComponent } from './muserrole-list.component';
import { MuserroleService } from '../muserrole.service';

@Component({
  selector: 'app-muserrole-list-sub',
  templateUrl: './muserrole-list-sub.component.html',
  styleUrls: ['./muserrole-list.component.css']
})
export class MuserroleListSubComponent extends MuserroleListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected muserroleService: MuserroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, muserroleService, commonService, router, route, location);
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
      this.processSearchContext();
      this.populateList();
  }
}
