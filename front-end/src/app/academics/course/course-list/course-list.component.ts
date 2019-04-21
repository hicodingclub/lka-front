import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { CourseComponent, ViewType } from '../course.component';
import { CourseService } from '../course.service';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.public.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent extends CourseComponent implements OnInit {


  constructor(

      protected courseService: CourseService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                courseService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('title');
          this.stringFields.push('description');

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
