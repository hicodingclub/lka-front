import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TeacherComponent, ViewType } from '../teacher.component';
import { TeacherService } from '../teacher.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent extends TeacherComponent implements OnInit {


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected teacherService: TeacherService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                teacherService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('firstName');
          this.stringFields.push('lastName');
          this.stringFields.push('introduction');
          this.stringFields.push('photo');

          this.referenceFields = ['courses', ];
          this.referenceFieldsMap = {'courses': 'course',};





          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
