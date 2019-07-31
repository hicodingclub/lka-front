import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { PipelineService } from './pipeline.service';

const itemCamelName = 'pipeline';

export { ViewType };




export class PipelineComponent extends BaseComponent {



    constructor(
      
      public pipelineService: PipelineService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(pipelineService, injector, router, route, location, view, itemCamelName);

        
  this.briefFieldsInfo = [];
  this.briefFieldsInfo.push(['category', 'Category']);
  this.briefFieldsInfo.push(['createdAt', 'Created at']);
  this.briefFieldsInfo.push(['muser_id', 'Muser Id']);
  

        this.schemaName = 'pipeline';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'pipeline';
        this.indexFields = ['category','muser_id', ];
    }
}
