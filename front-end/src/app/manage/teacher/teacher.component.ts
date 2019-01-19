import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { TeacherService } from './teacher.service';

const itemName = 'teacher';

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';

import { ComponentFactoryResolver } from '@angular/core';
import { ManageRefSelectDirective } from '../manage.component';

import { CourseDetailSelComponent } from '../course/course-detail/course-detail-sel.component';
import { CourseDetailPopComponent } from '../course/course-detail/course-detail-pop.component';
import { CourseSelectComponent } from '../course/course-list/course-select.component';


export class TeacherComponent extends BaseComponent {

    protected selectComponents = {

      'courses': {
          'select-type':CourseSelectComponent, 
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(ManageRefSelectDirective) refSelectDirective: ManageRefSelectDirective;


    @ViewChild('ManageModal') protected focusEl: ElementRef;

    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(teacherService, commonService, router, route, location, view, itemName);
        
        this.indexFields = ['lastName', ];
    }
}
