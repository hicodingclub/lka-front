import { Component, OnInit, Input, Directive } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { TeacherComponent, ViewType } from '../teacher.component';
import { TeacherService } from '../teacher.service';





@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent extends TeacherComponent implements OnInit {        
    @Input() 
    protected id:string;
    @Input()
    protected cid:string;//copy id
    private action:string;

        
    constructor(
      
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( 
                 teacherService, commonService, router, route, location, ViewType.EDIT);


          this.stringFields.push('firstName');
          this.stringFields.push('lastName');
          this.stringFields.push('introduction');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');



          
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
