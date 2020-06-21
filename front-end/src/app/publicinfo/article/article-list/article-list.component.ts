import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { ArticleListCustComponent } from '../../../publicinfo-cust/base/article/article-list.cust.component';
import { ViewType } from '../article.component';
import { ArticleService } from '../article.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';
  
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent extends ArticleListCustComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
  //                        disableListSearch: false, disableTitle: false, disableRefs: false
  //                        disableListHead: false, disableTitleRow: false}
  // @Input()
  // public inputData:any;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  // @Input()
  // public categoryBy:string; //field name whose value is used as category
  
  @ViewChildren(MddsRichTextShowDirective) textEditors: QueryList<MddsRichTextShowDirective>;

  constructor(
      
      public articleService: ArticleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                articleService, injector, router, route, location, ViewType.LIST);

          this.fieldDisplayNames = {
            'signaturePicture': 'Signature Picture',
            'title': 'Title',
            'author': 'Author',
            'publishDate': 'Publish Date',
            'category': 'Category',
          };
          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('author');
          this.stringFields.push('category');
          this.dateFields = ['publishDate', ];
          this.viewHiddenFields = ['category', ];

          this.listViewFilter = 'list';
          this.setListSort('publishDate', 'Publish Date', 'desc');

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};

          
          this.itemMultiSelect = true;
  }

  ngOnInit() {
      super.ngOnInit();

      this.adjustListViewForWindowSize();

      this.clickItemAction = typeof this.options.clickItemAction === 'undefined'? this.clickItemAction : this.options.clickItemAction;
      this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ?  this.options.itemMultiSelect : this.itemMultiSelect;
  
      if (!this.options) {
        this.options = {};
      }
  
      if (this.options.disableCatetory) {
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
      }

      // this is to initialize the detail that will be used for search condition selection
      let detail = {};
      if (this.searchObj) {
        this.searchDetailReady = true; // search provided from "detail", not from search bar.
        detail = this.searchObj;
      }
      if (this.queryParams) {
        this.listSortField = this.queryParams.listSortField;
        this.listSortOrder = this.queryParams.listSortOrder;
        if (this.queryParams.perPage) {
          this.perPage = this.queryParams.perPage 
        }
      }
      this.detail = this.formatDetail(detail);
      this.searchList();

      // get editHintFields
      this.searchHintFieldValues();
  }

  static getInstance() {
    //used by others to call some common functions
    return new ArticleListComponent(null, null, null, null, null);
  }
}

