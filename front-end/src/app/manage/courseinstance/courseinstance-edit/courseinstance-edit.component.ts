import { Component, OnInit, Input, Directive } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceComponent, ViewType } from '../courseinstance.component';
import { CourseinstanceService } from '../courseinstance.service';



import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-courseinstance-edit',
  templateUrl: './courseinstance-edit.component.html',
  styleUrls: ['./courseinstance-edit.component.css']
})
export class CourseinstanceEditComponent extends CourseinstanceComponent implements OnInit {        
    @Input() 
    protected id:string;
    @Input()
    protected cid:string;//copy id
    private action:string;

        
    constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected courseinstanceService: CourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( componentFactoryResolver,
                 courseinstanceService, commonService, router, route, location, ViewType.EDIT);

          this.enums['dayOfWeek'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ];

          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('dayOfWeek');

          this.referenceFields = ['teacher', 'course', ];
          this.referenceFieldsMap = {'teacher': 'teacher','course': 'course',};

          this.dateFields = ['startTime', 'endTime', ];

          
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
