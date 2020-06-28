import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TeacherDetailCustComponent } from '../../../academics-cust/base/teacher/teacher-detail.cust.component';
import { ViewType } from '../teacher.component';
import { TeacherService } from '../teacher.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent extends TeacherDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public teacherService: TeacherService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                teacherService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'email': 'Email',
            'phoneNumber': 'Phone Number',
            'courses': 'Program',
            'introduction': 'Introduction',
            'photo': 'Photo',
          };
          this.stringFields.push('firstName');
          this.stringFields.push('lastName');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('introduction');
          this.stringFields.push('photo');
          this.referenceFields = [
            'courses',
          ];
          this.textareaFields = [
            'introduction',
          ];
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./class/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
