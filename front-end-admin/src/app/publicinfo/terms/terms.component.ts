import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { TermsService } from './terms.service';

const itemCamelName = 'terms';

export { ViewType };




export class TermsComponent extends BaseComponent {



    constructor(

      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(termsService, injector, router, route, location, view, itemCamelName);
        this.schemaName = 'terms';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['name', ];
    }
}
