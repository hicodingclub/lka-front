import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MroleService } from './mrole.service';

const itemCamelName = 'mrole';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MroleComponent extends BaseComponent {


    @ViewChild('RolesModal') protected focusEl: ElementRef;

    constructor(

      protected mroleService: MroleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mroleService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['role', ];
    }
}
