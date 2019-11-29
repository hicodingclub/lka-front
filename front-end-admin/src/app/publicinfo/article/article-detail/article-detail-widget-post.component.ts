import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ArticleService } from '../article.service';
import { ArticleDetailComponent } from './article-detail.component';




@Component({
  selector: 'app-article-detail-widget-post',
  templateUrl: './article-detail-widget-post.component.html',
  styleUrls: ['./article-detail.component.css', './article-detail-widget-post.component.css']
})
export class ArticleDetailWidgetPostComponent extends ArticleDetailComponent implements OnInit, AfterViewInit {
  constructor(
      
      public articleService: ArticleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                articleService, injector, router, route, location);
  }

  ngOnInit() {
      super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}
