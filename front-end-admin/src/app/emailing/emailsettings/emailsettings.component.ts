import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { EmailsettingsService } from './emailsettings.service';

const itemCamelName = 'email Settings';

export { ViewType };




export class EmailsettingsComponent extends BaseComponent {



    constructor(
      
      public emailsettingsService: EmailsettingsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(emailsettingsService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['settingName', 'Setting Name']);this.briefFieldsInfo.push(['defaultSender', 'Default Sender Email Address']);





        this.schemaName = 'emailsettings';
        
        this.modulePath = 'emailing';
        this.indexFields = ['settingName', ];
    }
}
