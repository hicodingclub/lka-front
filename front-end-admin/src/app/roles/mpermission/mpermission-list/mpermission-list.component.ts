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


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpermissionService: MpermissionService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                mpermissionService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('modulePermission');

          this.referenceFields = ['role', 'module', ];
          this.referenceFieldsMap = {'role': 'mrole','module': 'mmodule',};





          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
