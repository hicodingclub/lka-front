import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MpubmoduleService } from './mpubmodule.service';

const itemCamelName = 'public Module';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MpubmoduleComponent extends MddsBaseComponent {


    @ViewChild('AccessModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public mpubmoduleService: MpubmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mpubmoduleService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['module', 'Module']);this.briefFieldsInfo.push(['resources', 'Resources']);



        this.requiredFields = ['module',];


        this.schemaName = 'mpubmodule';
        
        this.modulePath = 'access';
        this.indexFields = ['module', ];
    }
}
