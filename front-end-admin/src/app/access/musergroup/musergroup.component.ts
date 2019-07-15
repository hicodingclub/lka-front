import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MusergroupService } from './musergroup.service';

const itemCamelName = 'user Group';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MusergroupComponent extends BaseComponent {


    @ViewChild('AccessModal') public focusEl: ElementRef;

    constructor(

      public musergroupService: MusergroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(musergroupService, injector, router, route, location, view, itemCamelName);
        this.schemaName = 'musergroup';
        
        this.modulePath = 'access';
        this.indexFields = ['group', ];
    }
}
