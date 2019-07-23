import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountroleComponent, ViewType } from '../maccountrole.component';
import { MaccountroleService } from '../maccountrole.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-maccountrole-detail',
  templateUrl: './maccountrole-detail.component.html',
  styleUrls: ['./maccountrole-detail.component.css']
})
export class MaccountroleDetailComponent extends MaccountroleComponent implements OnInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public maccountroleService: MaccountroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                maccountroleService, injector, router, route, location, ViewType.DETAIL);



          this.referenceFields = ['account', ];
          this.referenceFieldsMap = {'account': 'maccount',};




          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';

  }

  ngOnInit() {
      this.style = this.style || {};
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
