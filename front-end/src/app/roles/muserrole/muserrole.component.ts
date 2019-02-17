import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { MuserroleService } from './muserrole.service';

const itemCamelName = 'muserRole';

export { ViewType };


import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { RolesRefSelectDirective } from '../roles.component';

import { MuserDetailSelComponent } from '../muser/muser-detail/muser-detail-sel.component';
import { MuserDetailPopComponent } from '../muser/muser-detail/muser-detail-pop.component';
import { MuserSelectComponent } from '../muser/muser-list/muser-select.component';
import { MroleDetailSelComponent } from '../mrole/mrole-detail/mrole-detail-sel.component';
import { MroleDetailPopComponent } from '../mrole/mrole-detail/mrole-detail-pop.component';
import { MroleSelectComponent } from '../mrole/mrole-list/mrole-select.component';


export class MuserroleComponent extends BaseComponent {

    protected selectComponents = {

      'user': {
          'select-type':MuserSelectComponent, 
          'select-detail-type': MuserDetailSelComponent,
          'pop-detail-type': MuserDetailPopComponent,
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
      protected muserroleService: MuserroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(muserroleService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['user', ];
    }
}
