import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { CourseinstanceService } from './courseinstance.service';

const itemName = 'courseinstance';

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';

import { ComponentFactoryResolver } from '@angular/core';
import { ManageRefSelectDirective } from '../manage.component';

import { TeacherDetailSelComponent } from '../teacher/teacher-detail/teacher-detail-sel.component';
import { TeacherDetailPopComponent } from '../teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherSelectComponent } from '../teacher/teacher-list/teacher-select.component';
import { CourseDetailSelComponent } from '../course/course-detail/course-detail-sel.component';
import { CourseDetailPopComponent } from '../course/course-detail/course-detail-pop.component';
import { CourseSelectComponent } from '../course/course-list/course-select.component';


export class CourseinstanceComponent extends BaseComponent {

    protected selectComponents = {

      'teacher': {
          'select-type':TeacherSelectComponent, 
          'select-detail-type': TeacherDetailSelComponent,
          'pop-detail-type': TeacherDetailPopComponent,
          'componentRef': null},
      'course': {
          'select-type':CourseSelectComponent, 
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(ManageRefSelectDirective) refSelectDirective: ManageRefSelectDirective;


    @ViewChild('ManageModal') protected focusEl: ElementRef;

    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected courseinstanceService: CourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(courseinstanceService, commonService, router, route, location, view, itemName);
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.indexFields = ['title', ];
    }
}
