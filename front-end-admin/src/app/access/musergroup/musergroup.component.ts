import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MusergroupService } from './musergroup.service';

const itemCamelName = 'musergroup';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MusergroupComponent extends BaseComponent {


    @ViewChild('AccessModal') protected focusEl: ElementRef;

    constructor(

      protected musergroupService: MusergroupService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(musergroupService, injector, router, route, location, view, itemCamelName);
        
        this.modulePath = 'access';
        this.indexFields = ['group', ];
    }
}
