import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountroleComponent, ViewType } from '../maccountrole.component';
import { MaccountroleService } from '../maccountrole.service';


import { ComponentFactoryResolver } from '@angular/core';

  
@Component({
  selector: 'app-maccountrole-list',
  templateUrl: './maccountrole-list.component.html',
  styleUrls: ['./maccountrole-list.component.css']
})
export class MaccountroleListComponent extends MaccountroleComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
public componentFactoryResolver: ComponentFactoryResolver,
      public maccountroleService: MaccountroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                maccountroleService, injector, router, route, location, ViewType.LIST);



          this.referenceFields = ['account', ];




          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';
          this.referenceFieldsReverseMap['mrole'] = 'role';




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
    return new MaccountroleListComponent(null, null, null, null, null, null);
  }
}

