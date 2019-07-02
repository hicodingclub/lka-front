import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentListComponent } from './student-list.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list-home',
  templateUrl: './student-list-home.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListHomeComponent extends StudentListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected studentService: StudentService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super( studentService, injector, router, route, location);
        this.per_page = 4;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
