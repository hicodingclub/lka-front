import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { CourseService } from './course.service';

const itemCamelName = 'course';

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class CourseComponent extends BaseComponent {


    @ViewChild('ManageModal') protected focusEl: ElementRef;

    constructor(

      protected courseService: CourseService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(courseService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['title', ];
    }
}
