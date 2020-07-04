import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector, Component } from '@angular/core';
import { MuserService } from './muser.service';

const itemCamelName = 'user';

export { ViewType };



@Component({
  template: '',
})
export class MuserComponent extends MddsBaseComponent {



    constructor(
      
      public muserService: MuserService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {

        super(muserService, injector, router, route, location);
        this.setItemNames(itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['username', 'Username']);this.briefFieldsInfo.push(['email', 'Email']);this.briefFieldsInfo.push(['phone', 'Phone']);this.briefFieldsInfo.push(['since', 'Since']);this.briefFieldsInfo.push(['status', 'Status']);



        this.emailFields = [['Email','email'],];


        this.schemaName = 'muser';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'users';
        this.indexFields = ['username', ];
    }
}
