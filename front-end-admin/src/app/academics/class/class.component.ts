import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { ClassService } from './class.service';

const itemCamelName = 'class';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';

import { ComponentFactoryResolver } from '@angular/core';
import { AcademicsRefSelectDirective } from '../academics.component';

import { CourseDetailSelComponent } from '../course/course-detail/course-detail-sel.component';
import { CourseDetailPopComponent } from '../course/course-detail/course-detail-pop.component';
import { CourseSelectComponent } from '../course/course-list/course-select.component';
import { TeacherDetailSelComponent } from '../teacher/teacher-detail/teacher-detail-sel.component';
import { TeacherDetailPopComponent } from '../teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherSelectComponent } from '../teacher/teacher-list/teacher-select.component';


export class ClassComponent extends BaseComponent {

    protected selectComponents = {

      'course': {
          'select-type':CourseSelectComponent, 
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
      'teacher': {
          'select-type':TeacherSelectComponent, 
          'select-detail-type': TeacherDetailSelComponent,
          'pop-detail-type': TeacherDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective) refSelectDirective: AcademicsRefSelectDirective;


    @ViewChild('AcademicsModal') protected focusEl: ElementRef;

    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected classService: ClassService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(classService, injector, router, route, location, view, itemCamelName);
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.indexFields = ['title', ];
    }
}
