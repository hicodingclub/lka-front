import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { EventService } from './event.service';

const itemCamelName = 'event';

export { ViewType };




export class EventComponent extends BaseComponent {



    constructor(

      public eventService: EventService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(eventService, injector, router, route, location, view, itemCamelName);
        this.schemaName = 'event';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
