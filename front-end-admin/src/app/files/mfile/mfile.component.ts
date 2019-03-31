import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MfileService } from './mfile.service';

const itemCamelName = 'mfile';

export { ViewType };




export class MfileComponent extends BaseComponent {



    constructor(

      protected mfileService: MfileService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mfileService, injector, router, route, location, view, itemCamelName);
        this.dateFormat = 'MM/DD/YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.indexFields = ['name', ];
    }
}
