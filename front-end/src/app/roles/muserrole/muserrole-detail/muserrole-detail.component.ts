import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserroleComponent, ViewType } from '../muserrole.component';
import { MuserroleService } from '../muserrole.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-muserrole-detail',
  templateUrl: './muserrole-detail.component.html',
  styleUrls: ['./muserrole-detail.component.css']
})
export class MuserroleDetailComponent extends MuserroleComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected muserroleService: MuserroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                muserroleService, commonService, router, route, location, ViewType.DETAIL);



          this.referenceFields = ['user', ];
          this.referenceFieldsMap = {'user': 'muser',};



          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';


  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
