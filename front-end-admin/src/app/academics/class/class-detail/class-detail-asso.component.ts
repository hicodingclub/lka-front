import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassComponent, ViewType } from '../class.component';
import { ClassService } from '../class.service';


import { ComponentFactoryResolver } from '@angular/core';

import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-class-detail-asso',
  templateUrl: './class-detail-asso.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassAssoComponent extends ClassComponent implements OnInit {
  @Input() 
  public id:string;

  public associationSchema: string;
  public associationField: string;


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
            'hot': 'Hot',
            'enrollTerm': 'Enroll Term',
          };
          this.enums['dayOfWeek'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];
          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('price');
          this.stringFields.push('season');
          this.stringFields.push('duration');
          this.stringFields.push('timeSlot');
          this.referenceFields = ['course', 'teacher', 'enrollTerm', ];
          this.dateFields = ['startTime', 'endTime', ];
          this.multiSelectionFields = ['dayOfWeek', ];
  }

  ngOnInit() {
    // urls in <schema>/asso/:id/<assoSchema>/<assoField> format
    let urls = this.route.snapshot.url.join().split(',');
    this.associationSchema = urls[urls.length-2];
    this.associationField = urls[urls.length-1];
    this.detail = {};

    if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.populateDetail(this.id);
    } else {
      console.error("Routing error for association detail view... no id...");
    }
  }

  ngAfterViewInit() {
  }
}
