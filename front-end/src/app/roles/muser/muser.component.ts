import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { MuserService } from './muser.service';

const itemCamelName = 'muser';

export { ViewType };


import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MuserComponent extends BaseComponent {


    @ViewChild('RolesModal') protected focusEl: ElementRef;

    constructor(

      protected muserService: MuserService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(muserService, commonService, router, route, location, view, itemCamelName);
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.indexFields = ['username', ];
    }
}
