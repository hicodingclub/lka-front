import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentcourseinstanceComponent, ViewType } from '../studentcourseinstance.component';
import { StudentcourseinstanceService } from '../studentcourseinstance.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-studentcourseinstance-detail',
  templateUrl: './studentcourseinstance-detail.component.html',
  styleUrls: ['./studentcourseinstance-detail.component.css']
})
export class StudentcourseinstanceDetailComponent extends StudentcourseinstanceComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentcourseinstanceService: StudentcourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                studentcourseinstanceService, commonService, router, route, location, ViewType.DETAIL);



          this.referenceFields = ['student', 'courseInstance', ];
          this.referenceFieldsMap = {'student': 'student','courseInstance': 'courseinstance',};


  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
