import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceComponent, ViewType } from '../courseinstance.component';
import { CourseinstanceService } from '../courseinstance.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-courseinstance-list',
  templateUrl: './courseinstance-list.component.html',
  styleUrls: ['./courseinstance-list.component.css']
})
export class CourseinstanceListComponent extends CourseinstanceComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected courseinstanceService: CourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                courseinstanceService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('title');

          this.referenceFields = ['teacher', ];
          this.referenceFieldsMap = {'teacher': 'teacher',};

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
