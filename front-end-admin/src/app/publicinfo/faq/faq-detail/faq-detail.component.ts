import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { FaqComponent, ViewType } from '../faq.component';
import { FaqService } from '../faq.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextShowDirective } from 'mean-rest-angular';

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.css']
})
export class FaqDetailComponent extends FaqComponent implements OnInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;


  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(
      
      public faqService: FaqService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                faqService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('question');
          this.stringFields.push('answer');






  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
