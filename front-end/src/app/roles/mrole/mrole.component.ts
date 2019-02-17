import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { MroleService } from './mrole.service';

const itemCamelName = 'mrole';

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MroleComponent extends BaseComponent {


    @ViewChild('RolesModal') protected focusEl: ElementRef;

    constructor(

      protected mroleService: MroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mroleService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['role', ];
    }
}
