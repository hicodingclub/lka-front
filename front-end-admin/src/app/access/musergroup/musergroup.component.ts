import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MusergroupService } from './musergroup.service';

const itemCamelName = 'user Group';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MusergroupComponent extends MddsBaseComponent {


    @ViewChild('AccessModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public musergroupService: MusergroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(musergroupService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['group', 'Group']);this.briefFieldsInfo.push(['description', 'Description']);



        this.requiredFields = ['group',];


        this.schemaName = 'musergroup';
        
        this.modulePath = 'access';
        this.indexFields = ['group', ];
    }
}
