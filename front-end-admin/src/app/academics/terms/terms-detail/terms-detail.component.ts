import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TermsComponent, ViewType } from '../terms.component';
import { TermsService } from '../terms.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextShowDirective } from 'mean-rest-angular';

@Component({
  selector: 'app-terms-detail',
  templateUrl: './terms-detail.component.html',
  styleUrls: ['./terms-detail.component.css']
})
export class TermsDetailComponent extends TermsComponent implements OnInit, AfterViewInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}


  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(
      
      public termsService: TermsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                termsService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('name');
          this.stringFields.push('content');
          this.stringFields.push('acknowledge');
          this.stringFields.push('tag');






  }

  ngOnInit() {
      this.style = this.style || {};
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
    if (!this.isChildRouterActivated()) {
      this.router.navigate(['./class/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}