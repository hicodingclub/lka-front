import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentListComponent } from './student-list.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list-widget-sel',
  templateUrl: './student-list-widget-sel.component.html',
  styleUrls: ['./student-list.component.css', './student-list-widget-sel.component.css']
})
export class StudentListWidgetSelComponent extends StudentListComponent implements OnInit {
  constructor(
      public studentService: StudentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( studentService, injector, router, route, location);

        
        this.actionType = 'selection';
        this.listViewFilter = 'grid';
        this.listCategory1 = {}; // no do query based on category for select view;
        this.listCategory2 = {}; // no do query based on category for select view;

        this.clickItemAction = 'select';
        
        this.itemMultiSelect = true;
  }

  ngOnInit() {
    this.inputData = this.inputData || {} // expect stepTitle, preSelectedId
    this.selectedId = this.inputData.preSelectedId;

    super.ngOnInit();
  }
}
