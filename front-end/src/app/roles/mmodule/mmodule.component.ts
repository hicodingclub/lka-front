import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { MmoduleService } from './mmodule.service';

const itemCamelName = 'mmodule';

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MmoduleComponent extends BaseComponent {


    @ViewChild('RolesModal') protected focusEl: ElementRef;

    constructor(

      protected mmoduleService: MmoduleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mmoduleService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['module', ];
    }
}
