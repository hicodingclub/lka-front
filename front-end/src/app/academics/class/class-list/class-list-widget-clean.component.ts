import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-widget-clean',
  templateUrl: './class-list-widget-clean.component.html',
  styleUrls: ['./class-list.component.css', './class-list-widget-clean.component.css']
})
export class ClassListWidgetCleanComponent extends ClassListComponent implements OnInit {
  constructor(
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, classService, injector, router, route, location);
        this.per_page = 6;
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
  }

  ngOnInit() {
      super.ngOnInit();
  }
}