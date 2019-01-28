import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { StudentcourseinstanceService } from './studentcourseinstance.service';

const itemCamelName = 'studentCourseInstance';

export { ViewType };


import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { ManageRefSelectDirective } from '../manage.component';

import { StudentDetailSelComponent } from '../student/student-detail/student-detail-sel.component';
import { StudentDetailPopComponent } from '../student/student-detail/student-detail-pop.component';
import { StudentSelectComponent } from '../student/student-list/student-select.component';
import { CourseinstanceDetailSelComponent } from '../courseinstance/courseinstance-detail/courseinstance-detail-sel.component';
import { CourseinstanceDetailPopComponent } from '../courseinstance/courseinstance-detail/courseinstance-detail-pop.component';
import { CourseinstanceSelectComponent } from '../courseinstance/courseinstance-list/courseinstance-select.component';


export class StudentcourseinstanceComponent extends BaseComponent {

    protected selectComponents = {

      'student': {
          'select-type':StudentSelectComponent, 
          'select-detail-type': StudentDetailSelComponent,
          'pop-detail-type': StudentDetailPopComponent,
          'componentRef': null},
      'courseInstance': {
          'select-type':CourseinstanceSelectComponent, 
          'select-detail-type': CourseinstanceDetailSelComponent,
          'pop-detail-type': CourseinstanceDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(ManageRefSelectDirective) refSelectDirective: ManageRefSelectDirective;



    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentcourseinstanceService: StudentcourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(studentcourseinstanceService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['student', ];
    }
}
