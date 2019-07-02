import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { PipelineService } from './pipeline.service';

const itemCamelName = 'pipeline';

export { ViewType };




export class PipelineComponent extends BaseComponent {



    constructor(

      protected pipelineService: PipelineService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(pipelineService, injector, router, route, location, view, itemCamelName);
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'pipeline';
        this.indexFields = ['category','muser_id', ];
    }
}
