import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { EventComponent, ViewType } from '../event.component';
import { EventService } from '../event.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextShowDirective } from 'mean-rest-angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent extends EventComponent implements OnInit {
  @Input() 
  protected id:string;

  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(
      
      protected eventService: EventService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                eventService, commonService, router, route, location, ViewType.DETAIL);


          this.stringFields.push('title');
          this.stringFields.push('author');
          this.stringFields.push('content');


          this.dateFields = ['publishDate', ];




          this.textEditorMap['eventDetailContent'] = {
            fieldName: 'content'
          };
  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
