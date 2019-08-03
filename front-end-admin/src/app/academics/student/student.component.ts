import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { StudentService } from './student.service';

const itemCamelName = 'student';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class StudentComponent extends BaseComponent {


    @ViewChild('AcademicsModal') public focusEl: ElementRef;

    constructor(
      
      public studentService: StudentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(studentService, injector, router, route, location, view, itemCamelName);

        
  this.briefFieldsInfo = [];
  this.briefFieldsInfo.push(['first_name', 'First Name']);
  this.briefFieldsInfo.push(['last_name', 'Last Name']);
  this.briefFieldsInfo.push(['email', 'Email']);
  this.briefFieldsInfo.push(['grade', 'Grade']);
  this.briefFieldsInfo.push(['school', 'School']);
  this.briefFieldsInfo.push(['GuardianOnePhone', 'Guardian One Phone']);
  this.briefFieldsInfo.push(['muser_id', 'Muser Id']);
  

        this.schemaName = 'student';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'academics';
        this.indexFields = ['first_name','last_name', ];
    }
}
