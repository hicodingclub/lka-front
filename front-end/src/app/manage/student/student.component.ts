import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { StudentService } from './student.service';

var itemName = "student";

export { ViewType };





export class StudentComponent extends BaseComponent {



    constructor(
      
      protected studentService: StudentService,
      protected commonService: MraCommonService,      
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(studentService, commonService, router, route, location, view, itemName);
        this.dateFormat = "MM-DD-YYYY";
        this.timeFormat = "hh:mm:ss";
        this.indexFields = ['email',];
    }
}
