import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MaccountroleService } from './maccountrole.service';

const itemCamelName = 'account Role';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { RolesRefSelectDirective } from '../roles.component';

import { MaccountDetailSelComponent } from '../maccount/maccount-detail/maccount-detail-sel.component';
import { MaccountDetailPopComponent } from '../maccount/maccount-detail/maccount-detail-pop.component';
import { MaccountListSelectComponent } from '../maccount/maccount-list/maccount-list-select.component';
import { MroleDetailSelComponent } from '../mrole/mrole-detail/mrole-detail-sel.component';
import { MroleDetailPopComponent } from '../mrole/mrole-detail/mrole-detail-pop.component';
import { MroleListSelectComponent } from '../mrole/mrole-list/mrole-list-select.component';


export class MaccountroleComponent extends BaseComponent {

    public selectComponents = {

      'account': {
          'select-type': MaccountListSelectComponent,
          'select-detail-type': MaccountDetailSelComponent,
          'pop-detail-type': MaccountDetailPopComponent,
          'componentRef': null},
      'role': {
          'select-type': MroleListSelectComponent,
          'select-detail-type': MroleDetailSelComponent,
          'pop-detail-type': MroleDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(RolesRefSelectDirective) refSelectDirective: RolesRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public maccountroleService: MaccountroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(maccountroleService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['account', 'Account']);this.briefFieldsInfo.push(['role', 'Role']);



        this.referenceFieldsMap = {'account': 'maccount',};
        this.referenceFieldsReverseMap = {'maccount': 'account',};
        this.requiredFields = ['account',];


        this.schemaName = 'maccountrole';
        
        this.modulePath = 'roles';
        this.indexFields = ['account', ];
    }
}
