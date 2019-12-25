import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { ArticleService } from './article.service';

const itemCamelName = 'resource';

export { ViewType };




export class ArticleComponent extends MddsBaseComponent {



    constructor(
      
      public articleService: ArticleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(articleService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['signaturePicture', 'Signature Picture']);this.briefFieldsInfo.push(['title', 'Title']);this.briefFieldsInfo.push(['author', 'Author']);this.briefFieldsInfo.push(['publishDate', 'Publish Date']);this.briefFieldsInfo.push(['category', 'Category']);



        this.requiredFields = ['category','title','content','signaturePicture',];


        this.schemaName = 'article';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
