import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassenrollDetailCustComponent } from '../../../academics-cust/base/classenroll/classenroll-detail.cust.component';
import { ViewType } from '../classenroll.component';
import { ClassenrollService } from '../classenroll.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-classenroll-detail',
  templateUrl: './classenroll-detail.component.html',
  styleUrls: ['./classenroll-detail.component.css']
})
export class ClassenrollDetailComponent extends ClassenrollDetailCustComponent implements OnInit, AfterViewInit {
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
      public classenrollService: ClassenrollService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                classenrollService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'student': 'Student',
            'class': 'Class',
            'status': 'Status',
            'notes': 'Notes',
            'createdAt': 'Created Time',
          };

          this.enums['status'] = ['processing', 'paid', 'confirmed', 'cancelled', ];

          this.stringFields.push('status');
          this.stringFields.push('notes');

          this.referenceFields = ['class', ];

          this.dateFields = ['createdAt', ];




          this.arrayFields = [['student', 'ObjectId'],];
          this.referenceFieldsMap['student'] = 'student';
          this.referenceFieldsReverseMap['student'] = 'student';


          this.textareaFields = ['notes', ];


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
