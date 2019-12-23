import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { FaqService } from './faq.service';

const itemCamelName = 'fAQ';

export { ViewType };




export class FaqComponent extends MddsBaseComponent {



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



        this.requiredFields = ['question','answer','order',];


        this.schemaName = 'faq';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['question', ];
    }
}
