import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { KeynoteService } from './keynote.service';

const itemCamelName = 'key Notes';

export { ViewType };




export class KeynoteComponent extends MddsBaseComponent {



    constructor(
      
      public keynoteService: KeynoteService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(keynoteService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['signaturePicture', 'Signature Picture']);this.briefFieldsInfo.push(['title', 'Title']);this.briefFieldsInfo.push(['subtitle', 'Subtitle']);this.briefFieldsInfo.push(['description', 'Description']);this.briefFieldsInfo.push(['tag', 'Tag']);





        this.schemaName = 'keynote';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
