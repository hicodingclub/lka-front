import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MpubaccessService } from './mpubaccess.service';

const itemCamelName = 'mpubaccess';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { AccessRefSelectDirective } from '../access.component';

import { MusergroupDetailSelComponent } from '../musergroup/musergroup-detail/musergroup-detail-sel.component';
import { MusergroupDetailPopComponent } from '../musergroup/musergroup-detail/musergroup-detail-pop.component';
import { MusergroupSelectComponent } from '../musergroup/musergroup-list/musergroup-select.component';
import { MpubmoduleDetailSelComponent } from '../mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';
import { MpubmoduleDetailPopComponent } from '../mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import { MpubmoduleSelectComponent } from '../mpubmodule/mpubmodule-list/mpubmodule-select.component';


export class MpubaccessComponent extends BaseComponent {

    protected selectComponents = {

      'group': {
          'select-type':MusergroupSelectComponent, 
          'select-detail-type': MusergroupDetailSelComponent,
          'pop-detail-type': MusergroupDetailPopComponent,
          'componentRef': null},
      'module': {
          'select-type':MpubmoduleSelectComponent, 
          'select-detail-type': MpubmoduleDetailSelComponent,
          'pop-detail-type': MpubmoduleDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AccessRefSelectDirective) refSelectDirective: AccessRefSelectDirective;



    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpubaccessService: MpubaccessService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mpubaccessService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['group', ];
    }
}
