import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentComponent, ViewType } from '../student.component';
import { StudentService } from '../student.service';





@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent extends StudentComponent implements OnInit {        
    @Input() 
    protected id: string;
    @Input()
    protected cid: string;//copy id
    @Input()
    protected initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output() done = new EventEmitter<boolean>();

    private action:string;


        
    constructor(
      
      protected studentService: StudentService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( 
                 studentService, commonService, router, route, location, ViewType.EDIT);


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');
          this.stringFields.push('email');


          this.dateFields = ['date_of_birth', ];


          
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
            } else if (this.initData) {
                this.action="Add";
                this.subEdit = true;
                let detail = {
                    
                };
                for (let prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            } else {
                let detail = {
                    
                };
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
