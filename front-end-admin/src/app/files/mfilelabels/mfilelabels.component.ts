import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MfilelabelsService } from './mfilelabels.service';

const itemCamelName = 'mfilelabels';

export { ViewType };




export class MfilelabelsComponent extends BaseComponent {



    constructor(

      protected mfilelabelsService: MfilelabelsService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mfilelabelsService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['label', ];
    }
}
