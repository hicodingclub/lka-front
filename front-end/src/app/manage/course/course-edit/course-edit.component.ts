import { Component, OnInit, Input, Directive } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseComponent, ViewType } from '../course.component';
import { CourseService } from '../course.service';





@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent extends CourseComponent implements OnInit {        
    @Input() 
    protected id:string;
    @Input()
    protected cid:string;//copy id
    private action:string;

        
    constructor(
      
      protected courseService: CourseService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( 
                 courseService, commonService, router, route, location, ViewType.EDIT);


          this.stringFields.push('title');
          this.stringFields.push('description');



          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action="Edit";
            this.populateDetail(this.id);
        }
        else {
            this.action="Create";
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else {
                let detail = {
                    
                }
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
