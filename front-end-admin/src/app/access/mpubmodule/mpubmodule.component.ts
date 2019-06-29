import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MpubmoduleService } from './mpubmodule.service';

const itemCamelName = 'mpubmodule';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MpubmoduleComponent extends BaseComponent {


    @ViewChild('AccessModal') protected focusEl: ElementRef;

    constructor(

      protected mpubmoduleService: MpubmoduleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mpubmoduleService, injector, router, route, location, view, itemCamelName);
        
        this.modulePath = 'access';
        this.indexFields = ['module', ];
    }
}
