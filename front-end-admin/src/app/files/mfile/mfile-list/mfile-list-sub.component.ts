import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MfileListComponent } from './mfile-list.component';
import { MfileService } from '../mfile.service';

@Component({
  selector: 'app-mfile-list-sub',
  templateUrl: './mfile-list-sub.component.html',
  styleUrls: ['./mfile-list.component.css']
})
export class MfileListSubComponent extends MfileListComponent implements OnInit {
  public parentSchema;
  public parentItemId;

  constructor(
      public mfileService: MfileService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, mfileService, injector, router, route, location);

        this.listCategory1 = {}; // no do query based on category for sub view;
        this.listCategory2 = {}; // no do query based on category for sub view;
  }

  ngOnInit() {
      this.clickItemAction = ''; // don't go to details or select by clicking the card/row.
      this.adjustListViewForWindowSize();

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
