import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EventListComponent } from './event-list.component';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list-widget-clean',
  templateUrl: './event-list-widget-clean.component.html',
  styleUrls: ['./event-list.component.css', './event-list-widget-clean.component.css']
})
export class EventListWidgetCleanComponent extends EventListComponent implements OnInit {
  constructor(
      public eventService: EventService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( eventService, injector, router, route, location);
        this.perPage = 3;
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
  }

  ngOnInit() {
      super.ngOnInit();
  }
}
