import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MuserService } from './muser.service';

const itemCamelName = 'muser';

export { ViewType };





export class MuserComponent extends BaseComponent {



    constructor(

      public muserService: MuserService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(muserService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['username', ];
    }
}
