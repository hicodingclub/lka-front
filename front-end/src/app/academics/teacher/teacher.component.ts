import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { TeacherService } from './teacher.service';

const itemCamelName = 'instructors';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';

import { ComponentFactoryResolver } from '@angular/core';
import { AcademicsRefSelectDirective } from '../academics.component';

import { CourseDetailSelComponent } from '../course/course-detail/course-detail-sel.component';
import { CourseDetailPopComponent } from '../course/course-detail/course-detail-pop.component';
import { CourseListSelectComponent } from '../course/course-list/course-list-select.component';


export class TeacherComponent extends BaseComponent {

    public selectComponents = {

      'courses': {
          'select-type': CourseListSelectComponent,
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective) refSelectDirective: AcademicsRefSelectDirective;


    @ViewChild('AcademicsModal') public focusEl: ElementRef;

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
        this.briefFieldsInfo.push(['firstName', 'First Name']);this.briefFieldsInfo.push(['lastName', 'Last Name']);this.briefFieldsInfo.push(['courses', 'Program']);this.briefFieldsInfo.push(['introduction', 'Introduction']);this.briefFieldsInfo.push(['photo', 'Photo']);



        this.referenceFieldsMap = {'courses': 'course',};
        this.referenceFieldsReverseMap = {'course': 'courses',};
        this.emailFields = [['Email','email'],];
        this.requiredFields = ['firstName','lastName','courses','introduction','photo','email',];


        this.schemaName = 'teacher';
        
        this.modulePath = 'academics';
        this.indexFields = ['firstName','lastName', ];
    }
}
