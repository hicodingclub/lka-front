import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MfileService } from './mfile.service';

const itemCamelName = 'mfile';

export { ViewType };




export class MfileComponent extends BaseComponent {



    constructor(
      
      public mfileService: MfileService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mfileService, injector, router, route, location, view, itemCamelName);

        
  this.briefFieldsInfo = [];
  this.briefFieldsInfo.push(['name', 'Name']);
  this.briefFieldsInfo.push(['type', 'Type']);
  this.briefFieldsInfo.push(['labels', 'Labels']);
  this.briefFieldsInfo.push(['size', 'Size']);
  this.briefFieldsInfo.push(['link', 'Link']);
  this.briefFieldsInfo.push(['uploaded', 'Uploaded']);
  this.briefFieldsInfo.push(['hasThumbnail', 'Has Thumbnail']);
  

        this.schemaName = 'mfile';
        this.dateFormat = 'MM/DD/YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'files';
        this.indexFields = ['name', ];
    }
}
