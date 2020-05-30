import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TermsDetailCustComponent } from '../../../academics-cust/base/terms/terms-detail.cust.component';
import { ViewType } from '../terms.component';
import { TermsService } from '../terms.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-terms-detail',
  templateUrl: './terms-detail.component.html',
  styleUrls: ['./terms-detail.component.css']
})
export class TermsDetailComponent extends TermsDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();


  @ViewChildren(MddsRichTextShowDirective) textEditors: QueryList<MddsRichTextShowDirective>;

  constructor(
      
      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                termsService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'name': 'Name',
            'content': 'Content',
            'acknowledge': 'Acknowledge',
            'tag': 'Tag',
          };


          this.stringFields.push('name');
          this.stringFields.push('content');
          this.stringFields.push('acknowledge');
          this.stringFields.push('tag');










  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./class/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
