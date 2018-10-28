import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { EventComponent, ViewType } from '../event.component';
import { EventService } from '../event.service';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent extends EventComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear()-100, month: 1, day: 1}; 

  constructor(
      
      protected eventService: EventService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                eventService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('title');
          this.stringFields.push('author');


          this.dateFields = ['publishDate',];
          //this is to initialize the detail that will be used for search condition selection
          let detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
