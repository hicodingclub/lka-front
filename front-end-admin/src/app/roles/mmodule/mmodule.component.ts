import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MmoduleService } from './mmodule.service';

const itemCamelName = 'system Module';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MmoduleComponent extends BaseComponent {


    @ViewChild('RolesModal') public focusEl: ElementRef;

    constructor(
      
      public mmoduleService: MmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mmoduleService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['module', 'Module']);this.briefFieldsInfo.push(['resources', 'Resources']);



        this.requiredFields = ['module',];


        this.schemaName = 'mmodule';
        
        this.modulePath = 'roles';
        this.indexFields = ['module', ];
    }
}
