import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EventDetailCustComponent } from '../../../publicinfo-cust/base/event/event-detail.cust.component';
import { ViewType } from '../event.component';
import { EventService } from '../event.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent extends EventDetailCustComponent implements OnInit, AfterViewInit {
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
      
      public eventService: EventService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                eventService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'signaturePicture': 'Signature Picture',
            'title': 'Title',
            'author': 'Author',
            'publishDate': 'Publish Date',
            'content': 'Content',
          };
          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('author');
          this.stringFields.push('content');
          this.dateFields = ['publishDate', ];
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
