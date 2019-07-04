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


    @ViewChild('RolesModal') public focusEl: ElementRef;

    constructor(

      public mroleService: MroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(mroleService, injector, router, route, location, view, itemCamelName);
        
        this.modulePath = 'roles';
        this.indexFields = ['role', ];
    }
}
