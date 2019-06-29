import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MaccountService } from './maccount.service';

const itemCamelName = 'maccount';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MaccountComponent extends BaseComponent {


    @ViewChild('RolesModal') protected focusEl: ElementRef;

    constructor(

      protected maccountService: MaccountService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(maccountService, injector, router, route, location, view, itemCamelName);
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'roles';
        this.indexFields = ['username', ];
    }
}
