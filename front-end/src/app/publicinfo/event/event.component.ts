import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { EventService } from './event.service';

const itemCamelName = 'event';

export { ViewType };




export class EventComponent extends MddsBaseComponent {



    constructor(
      
      public eventService: EventService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(eventService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['signaturePicture', 'Signature Picture']);this.briefFieldsInfo.push(['title', 'Title']);this.briefFieldsInfo.push(['author', 'Author']);this.briefFieldsInfo.push(['publishDate', 'Publish Date']);



        this.requiredFields = ['signaturePicture','title','author','content',];


        this.schemaName = 'event';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
