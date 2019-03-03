import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { GeneralinfoService } from './generalinfo.service';

const itemCamelName = 'generalInfo';

export { ViewType };




export class GeneralinfoComponent extends BaseComponent {



    constructor(

      protected generalinfoService: GeneralinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(generalinfoService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['title', ];
    }
}
