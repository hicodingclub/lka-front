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
  protected searchObj:any;

  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected maccountroleService: MaccountroleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                maccountroleService, injector, router, route, location, ViewType.LIST);



          this.referenceFields = ['account', ];
          this.referenceFieldsMap = {'account': 'maccount',};




          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';


          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
