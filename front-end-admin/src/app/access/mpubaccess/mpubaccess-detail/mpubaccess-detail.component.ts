import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubaccessComponent, ViewType } from '../mpubaccess.component';
import { MpubaccessService } from '../mpubaccess.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-mpubaccess-detail',
  templateUrl: './mpubaccess-detail.component.html',
  styleUrls: ['./mpubaccess-detail.component.css']
})
export class MpubaccessDetailComponent extends MpubaccessComponent implements OnInit {
  @Input() 
  protected id:string;
  @Input()
  protected searchObj:any;



  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpubaccessService: MpubaccessService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                mpubaccessService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('modulePermission');

          this.referenceFields = ['group', 'module', ];
          this.referenceFieldsMap = {'group': 'musergroup','module': 'mpubmodule',};


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
