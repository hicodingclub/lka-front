import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { TeacherService } from './teacher.service';

const itemCamelName = 'teacher';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { AcademicsRefSelectDirective } from '../academics.component';

import { CourseDetailSelComponent } from '../course/course-detail/course-detail-sel.component';
import { CourseDetailPopComponent } from '../course/course-detail/course-detail-pop.component';
import { CourseSelectComponent } from '../course/course-list/course-select.component';


export class TeacherComponent extends BaseComponent {

    public selectComponents = {

      'courses': {
          'select-type':CourseSelectComponent,
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective) refSelectDirective: AcademicsRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public teacherService: TeacherService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(teacherService, injector, router, route, location, view, itemCamelName);

        
  this.briefFieldsInfo = [];
  this.briefFieldsInfo.push(['firstName', 'First Name']);
  this.briefFieldsInfo.push(['lastName', 'Last Name']);
  this.briefFieldsInfo.push(['courses', 'Courses']);
  this.briefFieldsInfo.push(['introduction', 'Introduction']);
  this.briefFieldsInfo.push(['photo', 'Photo']);
  

        this.schemaName = 'teacher';
        
        this.modulePath = 'academics';
        this.indexFields = ['firstName','lastName', ];
    }
}
