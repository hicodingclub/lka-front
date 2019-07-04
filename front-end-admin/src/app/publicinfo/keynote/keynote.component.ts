import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { KeynoteService } from './keynote.service';

const itemCamelName = 'keyNote';

export { ViewType };




export class KeynoteComponent extends BaseComponent {



    constructor(

      public keynoteService: KeynoteService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(keynoteService, injector, router, route, location, view, itemCamelName);
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
