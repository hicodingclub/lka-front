import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { TeacherComponent, ViewType } from '../teacher.component';
import { TeacherService } from '../teacher.service';



@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent extends TeacherComponent implements OnInit {


  constructor(
      
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                teacherService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('firstName');
          this.stringFields.push('lastName');


          //this is to initialize the detail that will be used for search condition selection
          let detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
