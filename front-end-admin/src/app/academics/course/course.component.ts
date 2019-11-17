import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { CourseService } from './course.service';

const itemCamelName = 'programs';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class CourseComponent extends BaseComponent {


    @ViewChild('AcademicsModal') public focusEl: ElementRef;

    constructor(
      
      public courseService: CourseService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(courseService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['title', 'Title']);this.briefFieldsInfo.push(['description', 'Description']);





        this.schemaName = 'course';
        
        this.modulePath = 'academics';
        this.indexFields = ['title', ];
    }
}
