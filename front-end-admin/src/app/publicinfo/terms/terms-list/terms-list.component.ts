import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TermsComponent, ViewType } from '../terms.component';
import { TermsService } from '../terms.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextShowDirective } from 'mean-rest-angular';
  
@Component({
  selector: 'app-terms-list',
  templateUrl: './terms-list.component.html',
  styleUrls: ['./terms-list.component.css']
})
export class TermsListComponent extends TermsComponent implements OnInit {


  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  
  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(

      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                termsService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('name');







          this.listViewFilter = 'list';
  }

  ngOnInit() {
      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }
}
