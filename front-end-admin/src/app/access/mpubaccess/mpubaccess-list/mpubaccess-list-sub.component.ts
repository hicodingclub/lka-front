import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubaccessListComponent } from './mpubaccess-list.component';
import { MpubaccessService } from '../mpubaccess.service';

@Component({
  selector: 'app-mpubaccess-list-sub',
  templateUrl: './mpubaccess-list-sub.component.html',
  styleUrls: ['./mpubaccess-list.component.css']
})
export class MpubaccessListSubComponent extends MpubaccessListComponent implements OnInit {
  public parentSchema;
  public parentItemId;

  constructor(
      public mpubaccessService: MpubaccessService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, mpubaccessService, injector, router, route, location);

        this.listCategory1 = {}; // no do query based on category for sub view;
        this.listCategory2 = {}; // no do query based on category for sub view;
  }

  ngOnInit() {
    
      let ref = this.getParentRouteRefField();
      this.parentSchema = this.referenceFieldsReverseMap[ref];

      this.parentItemId = this.getParentRouteItemId();
      let id = this.parentItemId;

      this.detail = {};

      this.parentData = {};
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
