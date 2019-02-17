import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentclassComponent, ViewType } from '../studentclass.component';
import { StudentclassService } from '../studentclass.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-studentclass-list',
  templateUrl: './studentclass-list.component.html',
  styleUrls: ['./studentclass-list.component.css']
})
export class StudentclassListComponent extends StudentclassComponent implements OnInit {


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentclassService: StudentclassService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                studentclassService, commonService, router, route, location, ViewType.LIST);



          this.referenceFields = ['student', 'class', ];
          this.referenceFieldsMap = {'student': 'student','class': 'class',};




          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
