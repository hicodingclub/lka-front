import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-ex-h',
  templateUrl: './class-list-home.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListHomeComponent extends ClassListComponent implements OnInit {
  constructor(
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, classService, injector, router, route, location);
        this.per_page = 4;
        this.categoryBy = undefined; // no do query based on category for home view;
  }

  ngOnInit() {
    this.adjustListViewForWindowSize();

    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
