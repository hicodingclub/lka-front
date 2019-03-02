import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MuserService } from './muser.service';

const itemCamelName = 'muser';

export { ViewType };





export class MuserComponent extends BaseComponent {



    constructor(

      protected muserService: MuserService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(muserService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['username', ];
    }
}
