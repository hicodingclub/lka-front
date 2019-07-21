import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { StudentclassComponent, ViewType } from '../studentclass.component';
import { StudentclassService } from '../studentclass.service';


import { ComponentFactoryResolver } from '@angular/core';

  
@Component({
  selector: 'app-studentclass-list',
  templateUrl: './studentclass-list.component.html',
  styleUrls: ['./studentclass-list.component.css']
})
export class StudentclassListComponent extends StudentclassComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
public componentFactoryResolver: ComponentFactoryResolver,
      public studentclassService: StudentclassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                studentclassService, injector, router, route, location, ViewType.LIST);



          this.referenceFields = ['student', 'class', ];
          this.referenceFieldsMap = {'student': 'student','class': 'class',};






          this.listViewFilter = 'list';
  }

  ngOnInit() {
      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }
}
