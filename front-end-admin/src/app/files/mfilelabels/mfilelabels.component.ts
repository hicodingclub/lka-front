import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { MfilelabelsService } from './mfilelabels.service';

const itemCamelName = 'mfilelabels';

export { ViewType };




export class MfilelabelsComponent extends BaseComponent {



    constructor(
      
      public mfilelabelsService: MfilelabelsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mfilelabelsService, injector, router, route, location, view, itemCamelName);

        
  this.briefFieldsInfo = [];
  this.briefFieldsInfo.push(['label', 'Label']);
  

        this.schemaName = 'mfilelabels';
        
        this.modulePath = 'files';
        this.indexFields = ['label', ];
    }
}
