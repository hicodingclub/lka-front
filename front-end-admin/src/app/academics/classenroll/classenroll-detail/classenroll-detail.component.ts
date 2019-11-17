import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassenrollComponent, ViewType } from '../classenroll.component';
import { ClassenrollService } from '../classenroll.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-classenroll-detail',
  templateUrl: './classenroll-detail.component.html',
  styleUrls: ['./classenroll-detail.component.css']
})
export class ClassenrollDetailComponent extends ClassenrollComponent implements OnInit, AfterViewInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public classenrollService: ClassenrollService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                classenrollService, injector, router, route, location, ViewType.DETAIL);

          this.enums['status'] = ['processing', 'paid', 'confirmed', 'cancelled', ];

          this.stringFields.push('status');
          this.stringFields.push('notes');
          this.stringFields.push('muser_id');

          this.referenceFields = ['class', ];

          this.dateFields = ['createdAt', 'updatedAt', ];



          this.arrayFields = [['student', 'ObjectId'],];
          this.referenceFieldsMap['student'] = 'student';
          this.referenceFieldsReverseMap['student'] = 'student';


          this.textareaFields = ['notes', ];

  }

  ngOnInit() {
      this.style = this.style || {};
      this.options = this.options || {};
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
