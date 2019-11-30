import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MpermissionService } from './mpermission.service';

const itemCamelName = 'permission';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { RolesRefSelectDirective } from '../roles.component';

import { MroleDetailSelComponent } from '../mrole/mrole-detail/mrole-detail-sel.component';
import { MroleDetailPopComponent } from '../mrole/mrole-detail/mrole-detail-pop.component';
import { MroleListSelectComponent } from '../mrole/mrole-list/mrole-list-select.component';
import { MmoduleDetailSelComponent } from '../mmodule/mmodule-detail/mmodule-detail-sel.component';
import { MmoduleDetailPopComponent } from '../mmodule/mmodule-detail/mmodule-detail-pop.component';
import { MmoduleListSelectComponent } from '../mmodule/mmodule-list/mmodule-list-select.component';


export class MpermissionComponent extends BaseComponent {

    public selectComponents = {

      'role': {
          'select-type': MroleListSelectComponent,
          'select-detail-type': MroleDetailSelComponent,
          'pop-detail-type': MroleDetailPopComponent,
          'componentRef': null},
      'module': {
          'select-type': MmoduleListSelectComponent,
          'select-detail-type': MmoduleDetailSelComponent,
          'pop-detail-type': MmoduleDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(RolesRefSelectDirective) refSelectDirective: RolesRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public mpermissionService: MpermissionService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mpermissionService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['role', 'Role']);this.briefFieldsInfo.push(['module', 'Module']);this.briefFieldsInfo.push(['modulePermission', 'Module Permission']);



        this.referenceFieldsMap = {'role': 'mrole','module': 'mmodule',};
        this.referenceFieldsReverseMap = {'mrole': 'role','mmodule': 'module',};
        this.requiredFields = ['role','module',];


        this.schemaName = 'mpermission';
        
        this.modulePath = 'roles';
        this.indexFields = ['role', ];
    }
}
