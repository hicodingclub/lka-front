import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpermissionDetailCustComponent } from '../../../roles-cust/base/mpermission/mpermission-detail.cust.component';
import { ViewType } from '../mpermission.component';
import { MpermissionService } from '../mpermission.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-mpermission-detail',
  templateUrl: './mpermission-detail.component.html',
  styleUrls: ['./mpermission-detail.component.css']
})
export class MpermissionDetailComponent extends MpermissionDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public mpermissionService: MpermissionService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                mpermissionService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'role': 'Role',
            'module': 'Module',
            'modulePermission': 'Module Permission',
            'resourcePermission': 'Resource Permission',
          };
          this.stringFields.push('modulePermission');
          this.referenceFields = ['role', 'module', ];
          this.mapFields = [
              ['resourcePermission', 'SchemaString', '', '', , ''],
          ];
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
