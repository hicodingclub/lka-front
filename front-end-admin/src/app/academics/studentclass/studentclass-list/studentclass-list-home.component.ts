import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentclassListComponent } from './studentclass-list.component';
import { StudentclassService } from '../studentclass.service';

@Component({
  selector: 'app-studentclass-list-home',
  templateUrl: './studentclass-list-home.component.html',
  styleUrls: ['./studentclass-list.component.css']
})
export class StudentclassListHomeComponent extends StudentclassListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected studentclassService: StudentclassService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, studentclassService, injector, router, route, location);
        this.per_page = 4;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
