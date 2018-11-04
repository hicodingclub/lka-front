import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { TeacherService } from './teacher.service';

var itemName = "teacher";

export { ViewType };





export class TeacherComponent extends BaseComponent {



    constructor(
      
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,      
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(teacherService, commonService, router, route, location, view, itemName);
        
        this.indexFields = ['email',];
    }
}
