import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { EventService } from './event.service';

const itemName = 'event';

export { ViewType };





export class EventComponent extends BaseComponent {



    constructor(

      protected eventService: EventService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(eventService, commonService, router, route, location, view, itemName);
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.indexFields = ['title', ];
    }
}
