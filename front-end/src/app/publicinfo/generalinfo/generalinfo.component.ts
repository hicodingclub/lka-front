import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { GeneralinfoService } from './generalinfo.service';

const itemCamelName = 'general Information';

export { ViewType };




export class GeneralinfoComponent extends MddsBaseComponent {



    constructor(
      
      public generalinfoService: GeneralinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(generalinfoService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['signaturePicture', 'Signature Picture']);this.briefFieldsInfo.push(['title', 'Title']);this.briefFieldsInfo.push(['description', 'Description']);this.briefFieldsInfo.push(['tag', 'Tag']);



        this.requiredFields = ['title','description',];


        this.schemaName = 'generalinfo';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
