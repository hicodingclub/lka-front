import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ArticleListComponent } from './article-list.component';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list-widget-clean',
  templateUrl: './article-list-widget-clean.component.html',
  styleUrls: ['./article-list.component.css', './article-list-widget-clean.component.css']
})
export class ArticleListWidgetCleanComponent extends ArticleListComponent implements OnInit {
  constructor(
      public articleService: ArticleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( articleService, injector, router, route, location);
        this.perPage = 3;
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
  }

  ngOnInit() {
      super.ngOnInit();
  }
}
