import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { CourseService } from './course.service';

var itemName = "course";

export { ViewType };





export class CourseComponent extends BaseComponent {



    constructor(
      
      protected courseService: CourseService,
      protected commonService: MraCommonService,      
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(courseService, commonService, router, route, location, view, itemName);
        this.dateFormat = "MM-DD-YYYY";
        this.indexFields = ['title',];
    }
}