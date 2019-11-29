import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
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
import { CourseListSelectIndexComponent } from '../course/course-list/course-list-select-index.component';
import { TeacherDetailSelComponent } from '../teacher/teacher-detail/teacher-detail-sel.component';
import { TeacherDetailPopComponent } from '../teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherListSelectComponent } from '../teacher/teacher-list/teacher-list-select.component';
import { TermsDetailSelComponent } from '../terms/terms-detail/terms-detail-sel.component';
import { TermsDetailPopComponent } from '../terms/terms-detail/terms-detail-pop.component';
import { TermsListSelectComponent } from '../terms/terms-list/terms-list-select.component';


export class ClassComponent extends BaseComponent {

    public selectComponents = {

      'course': {
          'select-type': CourseListSelectIndexComponent,
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
      'teacher': {
          'select-type': TeacherListSelectComponent,
          'select-detail-type': TeacherDetailSelComponent,
          'pop-detail-type': TeacherDetailPopComponent,
          'componentRef': null},
      'enrollTerm': {
          'select-type': TermsListSelectComponent,
          'select-detail-type': TermsDetailSelComponent,
          'pop-detail-type': TermsDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective) refSelectDirective: AcademicsRefSelectDirective;


    @ViewChild('AcademicsModal') public focusEl: ElementRef;

    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(classService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['title', 'Title']);this.briefFieldsInfo.push(['course', 'Program']);this.briefFieldsInfo.push(['teacher', 'Instructor']);this.briefFieldsInfo.push(['hot', 'Hot']);this.briefFieldsInfo.push(['season', 'Season']);this.briefFieldsInfo.push(['startTime', 'Start Time']);this.briefFieldsInfo.push(['endTime', 'End Time']);this.briefFieldsInfo.push(['dayOfWeek', 'Day of Week']);this.briefFieldsInfo.push(['timeSlot', 'Time Slot']);



        this.referenceFieldsMap = {'course': 'course','teacher': 'teacher','enrollTerm': 'terms',};
        this.referenceFieldsReverseMap = {'course': 'course','teacher': 'teacher','terms': 'enrollTerm',};


        this.schemaName = 'class';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'academics';
        this.indexFields = ['title', ];
    }
}
