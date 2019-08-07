import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleComponent, ViewType } from '../mpubmodule.component';
import { MpubmoduleService } from '../mpubmodule.service';



  
@Component({
  selector: 'app-mpubmodule-list',
  templateUrl: './mpubmodule-list.component.html',
  styleUrls: ['./mpubmodule-list.component.css']
})
export class MpubmoduleListComponent extends MpubmoduleComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(

      public mpubmoduleService: MpubmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mpubmoduleService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];



          this.listViewFilter = 'list';

  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new MpubmoduleListComponent(null, null, null, null, null);
  }
}

