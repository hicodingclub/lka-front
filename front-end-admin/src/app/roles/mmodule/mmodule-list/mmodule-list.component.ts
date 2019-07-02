import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MmoduleComponent, ViewType } from '../mmodule.component';
import { MmoduleService } from '../mmodule.service';



@Component({
  selector: 'app-mmodule-list',
  templateUrl: './mmodule-list.component.html',
  styleUrls: ['./mmodule-list.component.css']
})
export class MmoduleListComponent extends MmoduleComponent implements OnInit {


  @Input()
  protected searchObj:any;

  constructor(

      protected mmoduleService: MmoduleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mmoduleService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];


          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
