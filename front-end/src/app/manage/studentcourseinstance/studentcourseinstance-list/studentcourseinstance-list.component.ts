import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentcourseinstanceComponent, ViewType } from '../studentcourseinstance.component';
import { StudentcourseinstanceService } from '../studentcourseinstance.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-studentcourseinstance-list',
  templateUrl: './studentcourseinstance-list.component.html',
  styleUrls: ['./studentcourseinstance-list.component.css']
})
export class StudentcourseinstanceListComponent extends StudentcourseinstanceComponent implements OnInit {


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentcourseinstanceService: StudentcourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                studentcourseinstanceService, commonService, router, route, location, ViewType.LIST);



          this.referenceFields = ['student', 'courseInstance', ];
          this.referenceFieldsMap = {'student': 'student','courseInstance': 'courseinstance',};

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
