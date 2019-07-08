import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { CourseListComponent } from './course-list.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-home',
  templateUrl: './course-list-home.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListHomeComponent extends CourseListComponent implements OnInit {
  private parentData = {};
  constructor(
      public courseService: CourseService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( courseService, injector, router, route, location);
        this.per_page = 4;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
