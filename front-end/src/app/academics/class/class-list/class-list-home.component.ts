import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-home',
  templateUrl: './class-list-home.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListHomeComponent extends ClassListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected classService: ClassService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, classService, injector, router, route, location);
        this.per_page = 6;
  }

  ngOnInit() {
      this.populateList();
  }
}
