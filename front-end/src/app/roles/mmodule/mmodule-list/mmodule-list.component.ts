import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MmoduleComponent, ViewType } from '../mmodule.component';
import { MmoduleService } from '../mmodule.service';



@Component({
  selector: 'app-mmodule-list',
  templateUrl: './mmodule-list.component.html',
  styleUrls: ['./mmodule-list.component.css']
})
export class MmoduleListComponent extends MmoduleComponent implements OnInit {


  constructor(

      protected mmoduleService: MmoduleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mmoduleService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('module');




          this.arrayFields = [['resources', 'SchemaString'],];

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
