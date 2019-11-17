import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MaccountService } from './maccount.service';

const itemCamelName = 'account';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MaccountComponent extends BaseComponent {


    @ViewChild('RolesModal') public focusEl: ElementRef;

    constructor(
      
      public maccountService: MaccountService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(maccountService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['username', 'Username']);this.briefFieldsInfo.push(['email', 'Email']);this.briefFieldsInfo.push(['phone', 'Phone']);this.briefFieldsInfo.push(['since', 'Since']);this.briefFieldsInfo.push(['status', 'Status']);





        this.schemaName = 'maccount';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'roles';
        this.indexFields = ['username', ];
    }
}
