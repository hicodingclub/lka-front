import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { ArticleService } from './article.service';

const itemCamelName = 'article';

export { ViewType };




export class ArticleComponent extends BaseComponent {



    constructor(

      public articleService: ArticleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {
        super(articleService, injector, router, route, location, view, itemCamelName);
        this.schemaName = 'article';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'publicinfo';
        this.indexFields = ['title', ];
    }
}
