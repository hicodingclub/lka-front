import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { ClassenrollComponent, ViewType } from '../classenroll.component';
import { ClassenrollService } from '../classenroll.service';


import { ComponentFactoryResolver } from '@angular/core';

  
@Component({
  selector: 'app-classenroll-list',
  templateUrl: './classenroll-list.component.html',
  styleUrls: ['./classenroll-list.component.css']
})
export class ClassenrollListComponent extends ClassenrollComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
public componentFactoryResolver: ComponentFactoryResolver,
      public classenrollService: ClassenrollService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                classenrollService, injector, router, route, location, ViewType.LIST);

          this.enums['status'] = ['processing', 'payed', 'confirmed', 'cancelled', ];

          this.stringFields.push('status');

          this.referenceFields = ['class', ];
          this.referenceFieldsMap = {'class': 'class',};
          this.referenceFieldsReverseMap = {'class': 'class',};

          this.dateFields = ['createdAt', ];



          this.arrayFields = [['student', 'ObjectId'],];
          this.referenceFieldsMap['student'] = 'student';


          this.listViewFilter = 'list';

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
    return new ClassenrollListComponent(null, null, null, null, null, null);
  }
}

