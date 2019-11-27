import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-widget-sel',
  templateUrl: './class-list-widget-sel.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListWidgetSelComponent extends ClassListComponent implements OnInit {
  constructor(
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, classService, injector, router, route, location);

        this.isDropdownList =  true;
        this.actionType = 'selection';
        this.listViewFilter = 'dropdown';
        this.listCategory1 = {}; // no do query based on category for select view;
        this.listCategory2 = {}; // no do query based on category for select view;
  }

  ngOnInit() {
    this.inputData == this.inputData || {} // expect stepTitle, preSelectedId
    this.selectedId = this.inputData.preSelectedId;

    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
