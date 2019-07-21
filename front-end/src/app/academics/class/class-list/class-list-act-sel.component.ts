import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-act-sel',
  templateUrl: './class-list-act-sel.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListActSelComponent extends ClassListComponent implements OnInit {
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
        this.categoryBy = undefined; // no do query based on category for select view;
  }

  ngOnInit() {
    this.inputData == this.inputData || {} // expect stepTitle, preSelectedId
    this.selectedId = this.inputData.preSelectedId;

    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
