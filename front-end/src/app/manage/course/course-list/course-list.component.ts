import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseComponent, ViewType } from '../course.component';
import { CourseService } from '../course.service';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent extends CourseComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear()-100, month: 1, day: 1}; 

  constructor(
      
      protected courseService: CourseService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                courseService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('title');


          this.dateFields = ['time',];
          //this is to initialize the detail that will be used for search condition selection
          let detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
