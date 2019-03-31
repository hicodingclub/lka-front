import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { FaqinfoService } from './faqinfo.service';

const itemCamelName = 'faqInfo';

export { ViewType };




export class FaqinfoComponent extends BaseComponent {



    constructor(

      protected faqinfoService: FaqinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(faqinfoService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['question', ];
    }
}
