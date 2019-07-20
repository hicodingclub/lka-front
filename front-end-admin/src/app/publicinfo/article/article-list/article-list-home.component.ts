import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ArticleListComponent } from './article-list.component';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list-ex-h',
  templateUrl: './article-list-home.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListHomeComponent extends ArticleListComponent implements OnInit {
  constructor(
      public articleService: ArticleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( articleService, injector, router, route, location);
        this.per_page = 3;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}