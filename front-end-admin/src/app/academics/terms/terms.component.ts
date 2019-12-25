import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { TermsService } from './terms.service';

const itemCamelName = 'terms';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class TermsComponent extends MddsBaseComponent {


    @ViewChild('AcademicsModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(termsService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);



        this.requiredFields = ['name','content',];


        this.schemaName = 'terms';
        
        this.modulePath = 'academics';
        this.indexFields = ['name', ];
    }
}
