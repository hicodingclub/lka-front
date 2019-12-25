import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MroleService } from './mrole.service';

const itemCamelName = 'role';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MroleComponent extends MddsBaseComponent {


    @ViewChild('RolesModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public mroleService: MroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mroleService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['role', 'Role']);this.briefFieldsInfo.push(['description', 'Description']);



        this.requiredFields = ['role',];


        this.schemaName = 'mrole';
        
        this.modulePath = 'roles';
        this.indexFields = ['role', ];
    }
}
