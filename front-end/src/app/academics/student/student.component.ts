import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
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
        this.briefFieldsInfo.push(['first_name', 'First Name']);this.briefFieldsInfo.push(['last_name', 'Last Name']);this.briefFieldsInfo.push(['email', 'Email']);this.briefFieldsInfo.push(['phoneNumber', 'Phone Number']);this.briefFieldsInfo.push(['grade', 'Grade']);



        this.emailFields = [['Email','email'],['Guardian One Email','GuardianOneEmail'],['Guardian Two Email','GuardianTwoEmail'],];
        this.requiredFields = ['first_name','last_name','grade','email','phoneNumber','school','GuardianOnePhone',];


        this.schemaName = 'student';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'academics';
        this.indexFields = ['first_name','last_name', ];
    }
}
