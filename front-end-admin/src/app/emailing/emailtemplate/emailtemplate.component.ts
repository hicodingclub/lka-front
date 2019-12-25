import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { EmailtemplateService } from './emailtemplate.service';

const itemCamelName = 'email Template';

export { ViewType };




export class EmailtemplateComponent extends MddsBaseComponent {



    constructor(
      
      public emailtemplateService: EmailtemplateService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(emailtemplateService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['templateName', 'Template Name']);this.briefFieldsInfo.push(['fromEmail', 'From Email']);this.briefFieldsInfo.push(['subject', 'Subject']);this.briefFieldsInfo.push(['tag', 'Tag']);



        this.requiredFields = ['templateName','subject','content','tag',];


        this.schemaName = 'emailtemplate';
        
        this.modulePath = 'emailing';
        this.indexFields = ['templateName', ];
    }
}
