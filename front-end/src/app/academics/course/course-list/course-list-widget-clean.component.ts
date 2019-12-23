import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { CourseListComponent } from './course-list.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-widget-clean',
  templateUrl: './course-list-widget-clean.component.html',
  styleUrls: ['./course-list.component.css', './course-list-widget-clean.component.css']
})
export class CourseListWidgetCleanComponent extends CourseListComponent implements OnInit {
  constructor(
      public courseService: CourseService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( courseService, injector, router, route, location);
        this.perPage = 4;
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
  }

  ngOnInit() {
      super.ngOnInit();
  }
}
