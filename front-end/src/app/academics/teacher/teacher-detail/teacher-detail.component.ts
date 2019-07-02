import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TeacherComponent, ViewType } from '../teacher.component';
import { TeacherService } from '../teacher.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent extends TeacherComponent implements OnInit {
  @Input() 
  protected id:string;
  @Input()
  protected searchObj:any;



  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected teacherService: TeacherService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                teacherService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('firstName');
          this.stringFields.push('lastName');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('introduction');
          this.stringFields.push('photo');

          this.referenceFields = ['courses', ];
          this.referenceFieldsMap = {'courses': 'course',};






  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
