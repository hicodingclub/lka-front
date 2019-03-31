import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { FaqService } from './faq.service';

const itemCamelName = 'faq';

export { ViewType };




export class FaqComponent extends BaseComponent {



    constructor(

      protected faqService: FaqService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(faqService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['question', ];
    }
}
