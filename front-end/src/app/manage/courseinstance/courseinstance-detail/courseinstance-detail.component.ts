import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceComponent, ViewType } from '../courseinstance.component';
import { CourseinstanceService } from '../courseinstance.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-courseinstance-detail',
  templateUrl: './courseinstance-detail.component.html',
  styleUrls: ['./courseinstance-detail.component.css']
})
export class CourseinstanceDetailComponent extends CourseinstanceComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected courseinstanceService: CourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                courseinstanceService, commonService, router, route, location, ViewType.DETAIL);

          this.enums['dayOfWeek'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ];

          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('dayOfWeek');

          this.referenceFields = ['teacher', 'course', ];
          this.referenceFieldsMap = {'teacher': 'teacher','course': 'course',};

          this.dateFields = ['startTime', 'endTime', ];

  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
