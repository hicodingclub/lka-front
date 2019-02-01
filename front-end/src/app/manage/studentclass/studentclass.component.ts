import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { StudentclassService } from './studentclass.service';

const itemCamelName = 'studentClass';

export { ViewType };


import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { ManageRefSelectDirective } from '../manage.component';

import { StudentDetailSelComponent } from '../student/student-detail/student-detail-sel.component';
import { StudentDetailPopComponent } from '../student/student-detail/student-detail-pop.component';
import { StudentSelectComponent } from '../student/student-list/student-select.component';
import { ClassDetailSelComponent } from '../class/class-detail/class-detail-sel.component';
import { ClassDetailPopComponent } from '../class/class-detail/class-detail-pop.component';
import { ClassSelectComponent } from '../class/class-list/class-select.component';


export class StudentclassComponent extends BaseComponent {

    protected selectComponents = {

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
    @ViewChild(ManageRefSelectDirective) refSelectDirective: ManageRefSelectDirective;



    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentclassService: StudentclassService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(studentclassService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['student', ];
    }
}
