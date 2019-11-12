import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { FaqService } from './faq.service';

const itemCamelName = 'fAQ';

export { ViewType };




export class FaqComponent extends BaseComponent {



    constructor(
      
      public faqService: FaqService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(faqService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['question', 'Question']);this.briefFieldsInfo.push(['answer', 'Answer']);this.briefFieldsInfo.push(['order', 'Order']);




        this.schemaName = 'faq';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['question', ];
    }
}
