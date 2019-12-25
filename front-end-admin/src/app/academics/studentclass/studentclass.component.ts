import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { StudentclassService } from './studentclass.service';

const itemCamelName = 'studentClass';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { AcademicsRefSelectDirective } from '../academics.component';

import { StudentDetailSelComponent } from '../student/student-detail/student-detail-sel.component';
import { StudentDetailPopComponent } from '../student/student-detail/student-detail-pop.component';
import { StudentListSelectComponent } from '../student/student-list/student-list-select.component';
import { ClassDetailSelComponent } from '../class/class-detail/class-detail-sel.component';
import { ClassDetailPopComponent } from '../class/class-detail/class-detail-pop.component';
import { ClassListSelectComponent } from '../class/class-list/class-list-select.component';


export class StudentclassComponent extends MddsBaseComponent {

    public selectComponents = {

      'student': {
          'select-type': StudentListSelectComponent,
          'select-detail-type': StudentDetailSelComponent,
          'pop-detail-type': StudentDetailPopComponent,
          'componentRef': null},
      'class': {
          'select-type': ClassListSelectComponent,
          'select-detail-type': ClassDetailSelComponent,
          'pop-detail-type': ClassDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective, {static: true}) refSelectDirective: AcademicsRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public studentclassService: StudentclassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(studentclassService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['student', 'Student']);this.briefFieldsInfo.push(['class', 'Class']);



        this.referenceFieldsMap = {'student': 'student','class': 'class',};
        this.referenceFieldsReverseMap = {'student': 'student','class': 'class',};
        this.requiredFields = ['student','class',];


        this.schemaName = 'studentclass';
        
        this.modulePath = 'academics';
        this.indexFields = ['student', ];
    }
}
