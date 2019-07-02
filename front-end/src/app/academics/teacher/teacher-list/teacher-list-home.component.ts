import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TeacherListComponent } from './teacher-list.component';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list-home',
  templateUrl: './teacher-list-home.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListHomeComponent extends TeacherListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected teacherService: TeacherService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, teacherService, injector, router, route, location);
        this.per_page = 4;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
