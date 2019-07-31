import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { ClassenrollService } from './classenroll.service';

const itemCamelName = 'class Enrollments';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { AcademicsRefSelectDirective } from '../academics.component';

import { StudentDetailSelComponent } from '../student/student-detail/student-detail-sel.component';
import { StudentDetailPopComponent } from '../student/student-detail/student-detail-pop.component';
import { StudentSelectComponent } from '../student/student-list/student-select.component';
import { ClassDetailSelComponent } from '../class/class-detail/class-detail-sel.component';
import { ClassDetailPopComponent } from '../class/class-detail/class-detail-pop.component';
import { ClassSelectComponent } from '../class/class-list/class-select.component';


export class ClassenrollComponent extends BaseComponent {

    public selectComponents = {

      'student': {
          'select-type':StudentSelectComponent,
          'select-detail-type': StudentDetailSelComponent,
          'pop-detail-type': StudentDetailPopComponent,
          'componentRef': null},
      'class': {
          'select-type':ClassSelectComponent,
          'select-detail-type': ClassDetailSelComponent,
          'pop-detail-type': ClassDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective) refSelectDirective: AcademicsRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public classenrollService: ClassenrollService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(classenrollService, injector, router, route, location, view, itemCamelName);

        
  this.briefFieldsInfo = [];
  this.briefFieldsInfo.push(['student', 'Student']);
  this.briefFieldsInfo.push(['class', 'Class']);
  this.briefFieldsInfo.push(['status', 'Status']);
  this.briefFieldsInfo.push(['createdAt', 'Created At']);
  

        this.schemaName = 'classenroll';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'academics';
        this.indexFields = ['student', ];
    }
}
