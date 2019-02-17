import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserroleComponent, ViewType } from '../muserrole.component';
import { MuserroleService } from '../muserrole.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-muserrole-list',
  templateUrl: './muserrole-list.component.html',
  styleUrls: ['./muserrole-list.component.css']
})
export class MuserroleListComponent extends MuserroleComponent implements OnInit {


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected muserroleService: MuserroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                muserroleService, commonService, router, route, location, ViewType.LIST);



          this.referenceFields = ['user', ];
          this.referenceFieldsMap = {'user': 'muser',};



          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
