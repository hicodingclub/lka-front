import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { CourseService } from './course.service';

const itemCamelName = 'course';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class CourseComponent extends BaseComponent {


    @ViewChild('AcademicsModal') protected focusEl: ElementRef;

    constructor(

      protected courseService: CourseService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(courseService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['title', ];
    }
}
