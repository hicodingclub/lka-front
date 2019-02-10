import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { MraCommonService } from 'mean-rest-angular';
import { MuserService } from './muser.service';

const itemCamelName = 'muser';

export { ViewType };





export class MuserComponent extends BaseComponent {



    constructor(

      protected muserService: MuserService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(muserService, commonService, router, route, location, view, itemCamelName);
        
        this.indexFields = ['username', ];
    }
}
