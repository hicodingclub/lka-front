import { Component, OnInit, Input, Directive } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentcourseinstanceComponent, ViewType } from '../studentcourseinstance.component';
import { StudentcourseinstanceService } from '../studentcourseinstance.service';



import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-studentcourseinstance-edit',
  templateUrl: './studentcourseinstance-edit.component.html',
  styleUrls: ['./studentcourseinstance-edit.component.css']
})
export class StudentcourseinstanceEditComponent extends StudentcourseinstanceComponent implements OnInit {        
    @Input() 
    protected id:string;
    @Input()
    protected cid:string;//copy id
    private action:string;

        
    constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentcourseinstanceService: StudentcourseinstanceService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( componentFactoryResolver,
                 studentcourseinstanceService, commonService, router, route, location, ViewType.EDIT);



          this.referenceFields = ['student', 'courseInstance', ];
          this.referenceFieldsMap = {'student': 'student','courseInstance': 'courseinstance',};


          
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
