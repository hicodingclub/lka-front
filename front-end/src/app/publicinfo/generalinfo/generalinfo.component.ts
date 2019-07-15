import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { GeneralinfoService } from './generalinfo.service';

const itemCamelName = 'general Information';

export { ViewType };




export class GeneralinfoComponent extends BaseComponent {



    constructor(

      public generalinfoService: GeneralinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(generalinfoService, injector, router, route, location, view, itemCamelName);
        this.schemaName = 'generalinfo';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
