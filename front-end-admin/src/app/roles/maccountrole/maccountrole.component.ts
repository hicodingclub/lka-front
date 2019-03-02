import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MaccountroleService } from './maccountrole.service';

const itemCamelName = 'maccountRole';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { RolesRefSelectDirective } from '../roles.component';

import { MaccountDetailSelComponent } from '../maccount/maccount-detail/maccount-detail-sel.component';
import { MaccountDetailPopComponent } from '../maccount/maccount-detail/maccount-detail-pop.component';
import { MaccountSelectComponent } from '../maccount/maccount-list/maccount-select.component';
import { MroleDetailSelComponent } from '../mrole/mrole-detail/mrole-detail-sel.component';
import { MroleDetailPopComponent } from '../mrole/mrole-detail/mrole-detail-pop.component';
import { MroleSelectComponent } from '../mrole/mrole-list/mrole-select.component';


export class MaccountroleComponent extends BaseComponent {

    protected selectComponents = {

      'account': {
          'select-type':MaccountSelectComponent, 
          'select-detail-type': MaccountDetailSelComponent,
          'pop-detail-type': MaccountDetailPopComponent,
          'componentRef': null},
      'role': {
          'select-type':MroleSelectComponent, 
          'select-detail-type': MroleDetailSelComponent,
          'pop-detail-type': MroleDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(RolesRefSelectDirective) refSelectDirective: RolesRefSelectDirective;



    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected maccountroleService: MaccountroleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(maccountroleService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['account', ];
    }
}
