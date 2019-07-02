import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

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
  @Input()
  protected searchObj:any;



  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpermissionService: MpermissionService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                mpermissionService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('modulePermission');

          this.referenceFields = ['role', 'module', ];
          this.referenceFieldsMap = {'role': 'mrole','module': 'mmodule',};


          this.mapFields = [
              ['resourcePermission', 'SchemaString', '', '', , ''],
          ];




  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
