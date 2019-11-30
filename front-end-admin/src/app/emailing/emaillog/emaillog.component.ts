import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { EmaillogService } from './emaillog.service';

const itemCamelName = 'email Log';

export { ViewType };




export class EmaillogComponent extends BaseComponent {



    constructor(
      
      public emaillogService: EmaillogService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(emaillogService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['to', 'To']);this.briefFieldsInfo.push(['module', 'Module']);this.briefFieldsInfo.push(['reason', 'Reason']);this.briefFieldsInfo.push(['result', 'Result']);this.briefFieldsInfo.push(['userId', 'User Id']);this.briefFieldsInfo.push(['createdAt', 'Created at']);



        this.requiredFields = ['module','reason','result',];


        this.schemaName = 'emaillog';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'emailing';
        this.indexFields = ['module', ];
    }
}
