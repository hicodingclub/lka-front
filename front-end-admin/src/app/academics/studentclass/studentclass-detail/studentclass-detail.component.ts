import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentclassDetailCustComponent } from '../../../academics-cust/base/studentclass/studentclass-detail.cust.component';
import { ViewType } from '../studentclass.component';
import { StudentclassService } from '../studentclass.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-studentclass-detail',
  templateUrl: './studentclass-detail.component.html',
  styleUrls: ['./studentclass-detail.component.css']
})
export class StudentclassDetailComponent extends StudentclassDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public studentclassService: StudentclassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                studentclassService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'student': 'Student',
            'class': 'Class',
          };
          this.referenceFields = [
            'student',
            'class',
          ];
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
