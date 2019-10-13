import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MpermissionComponent, ViewType } from '../mpermission.component';
import { MpermissionService } from '../mpermission.service';


import { ComponentFactoryResolver } from '@angular/core';

  
@Component({
  selector: 'app-mpermission-list',
  templateUrl: './mpermission-list.component.html',
  styleUrls: ['./mpermission-list.component.css']
})
export class MpermissionListComponent extends MpermissionComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
public componentFactoryResolver: ComponentFactoryResolver,
      public mpermissionService: MpermissionService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                mpermissionService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('modulePermission');

          this.referenceFields = ['role', 'module', ];
          this.referenceFieldsMap = {'role': 'mrole','module': 'mmodule',};
          this.referenceFieldsReverseMap = {'mrole': 'role','mmodule': 'module',};







          this.listViewFilter = 'list';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
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
    return new MpermissionListComponent(null, null, null, null, null, null);
  }
}

