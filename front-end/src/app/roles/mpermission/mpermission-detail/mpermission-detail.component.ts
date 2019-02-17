import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MpermissionComponent, ViewType } from '../mpermission.component';
import { MpermissionService } from '../mpermission.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-mpermission-detail',
  templateUrl: './mpermission-detail.component.html',
  styleUrls: ['./mpermission-detail.component.css']
})
export class MpermissionDetailComponent extends MpermissionComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpermissionService: MpermissionService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                mpermissionService, commonService, router, route, location, ViewType.DETAIL);


          this.stringFields.push('modulePermission');

          this.referenceFields = ['role', 'module', ];
          this.referenceFieldsMap = {'role': 'mrole','module': 'mmodule',};





  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
