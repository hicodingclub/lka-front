import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { ClassComponent, ViewType } from '../class.component';
import { ClassService } from '../class.service';


import { ComponentFactoryResolver } from '@angular/core';

import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextShowDirective } from 'mean-rest-angular';
  
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent extends ClassComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  
  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(
public componentFactoryResolver: ComponentFactoryResolver,
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                classService, injector, router, route, location, ViewType.LIST);

          this.enums['dayOfWeek'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];

          this.stringFields.push('title');
          this.stringFields.push('season');
          this.stringFields.push('timeSlot');

          this.referenceFields = ['course', 'teacher', ];
          this.referenceFieldsMap = {'course': 'course','teacher': 'teacher',};
          this.referenceFieldsReverseMap = {'course': 'course','teacher': 'teacher',};

          this.dateFields = ['startTime', 'endTime', ];


          this.multiSelectionFields = ['dayOfWeek', ];




          this.listViewFilter = 'table';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new ClassListComponent(null, null, null, null, null, null);
  }
}

