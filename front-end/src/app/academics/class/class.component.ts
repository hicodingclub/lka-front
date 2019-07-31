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
import { TermsDetailSelComponent } from '../terms/terms-detail/terms-detail-sel.component';
import { TermsDetailPopComponent } from '../terms/terms-detail/terms-detail-pop.component';
import { TermsSelectComponent } from '../terms/terms-list/terms-select.component';


export class ClassComponent extends BaseComponent {

    public selectComponents = {

      'course': {
          'select-type':CourseSelectComponent,
          'select-detail-type': CourseDetailSelComponent,
          'pop-detail-type': CourseDetailPopComponent,
          'componentRef': null},
      'enrollTerm': {
          'select-type':TermsSelectComponent,
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
  this.briefFieldsInfo.push(['title', 'Title']);
  this.briefFieldsInfo.push(['course', 'Course']);
  this.briefFieldsInfo.push(['startTime', 'Start Time']);
  this.briefFieldsInfo.push(['endTime', 'End Time']);
  this.briefFieldsInfo.push(['dayOfWeek', 'Day of Week']);
  this.briefFieldsInfo.push(['timeSlot', 'Time Slot']);
  this.briefFieldsInfo.push(['enrollTerm', 'Enroll Term']);
  

        this.schemaName = 'class';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'academics';
        this.indexFields = ['title', ];
    }
}
