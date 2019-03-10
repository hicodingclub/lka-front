import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';


import { TeacherService} from '../../academics/teacher/teacher.service';
import { TeacherComponent, ViewType } from '../../academics/teacher/teacher.component';

@Component({
  selector: 'staff-component',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

export class StaffComponent extends TeacherComponent implements OnInit {
  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected staffService: TeacherService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver, staffService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('firstName');
          this.stringFields.push('lastName');

          this.stringFields.push('introduction');
          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
      
  }
}