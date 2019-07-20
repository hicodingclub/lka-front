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
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(

      public mmoduleService: MmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mmoduleService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];


          this.listViewFilter = 'list';
  }

  ngOnInit() {
      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }
}
