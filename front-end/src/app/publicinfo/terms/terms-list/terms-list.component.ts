import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TermsComponent, ViewType } from '../terms.component';
import { TermsService } from '../terms.service';



@Component({
  selector: 'app-terms-list',
  templateUrl: './terms-list.component.html',
  styleUrls: ['./terms-list.component.css']
})
export class TermsListComponent extends TermsComponent implements OnInit {


  @Input()
  public searchObj:any;

  constructor(

      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                termsService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('name');
          this.stringFields.push('content');
          this.stringFields.push('acknowledge');







          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
