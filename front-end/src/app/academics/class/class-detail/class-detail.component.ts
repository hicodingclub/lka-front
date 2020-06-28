import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassDetailCustComponent } from '../../../academics-cust/base/class/class-detail.cust.component';
import { ViewType } from '../class.component';
import { ClassService } from '../class.service';


import { ComponentFactoryResolver } from '@angular/core';

import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent extends ClassDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();


  @ViewChildren(MddsRichTextShowDirective) textEditors: QueryList<MddsRichTextShowDirective>;

  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                classService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'title': 'Title',
            'description': 'Description',
            'course': 'Program',
            'teacher': 'Instructor',
            'price': 'Price',
            'season': 'Season',
            'startTime': 'Start Time',
            'endTime': 'End Time',
            'duration': 'Duration',
            'dayOfWeek': 'Day of Week',
            'timeSlot': 'Time Slot',
            'enrollTerm': 'Enroll Term',
          };
          this.enums['dayOfWeek'] = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
          ];
          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('price');
          this.stringFields.push('season');
          this.stringFields.push('duration');
          this.stringFields.push('timeSlot');
          this.referenceFields = [
            'course',
            'teacher',
            'enrollTerm',
          ];
          this.dateFields = [
            'startTime',
            'endTime',
          ];
          this.multiSelectionFields = [
            'dayOfWeek', 
          ];
          this.viewHiddenFields = [
            'enrollTerm',
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
