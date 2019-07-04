import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
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
        
        this.modulePath = 'files';
        this.indexFields = ['label', ];
    }
}
