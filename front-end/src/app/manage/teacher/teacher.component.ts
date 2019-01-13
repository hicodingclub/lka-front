import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { TeacherService } from './teacher.service';

var itemName = "teacher";

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class TeacherComponent extends BaseComponent {

 
    @ViewChild('ManageModal') protected focusEl:ElementRef;

    constructor(
      
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,      
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(teacherService, commonService, router, route, location, view, itemName);
        
        this.indexFields = ['lastName',];
    }
}
