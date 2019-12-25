import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { EmaillogComponent, ViewType } from '../emaillog.component';
import { EmaillogService } from '../emaillog.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';
  
@Component({
  selector: 'app-emaillog-list',
  templateUrl: './emaillog-list.component.html',
  styleUrls: ['./emaillog-list.component.css']
})
export class EmaillogListComponent extends EmaillogComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  
  @ViewChildren(MddsRichTextShowDirective) textEditors: QueryList<MddsRichTextShowDirective>;

  constructor(
      
      public emaillogService: EmaillogService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emaillogService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('to');
          this.stringFields.push('module');
          this.stringFields.push('reason');
          this.stringFields.push('result');
          this.stringFields.push('userId');


          this.dateFields = ['createdAt', ];







          this.listViewFilter = 'list';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.searchList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new EmaillogListComponent(null, null, null, null, null);
  }
}

