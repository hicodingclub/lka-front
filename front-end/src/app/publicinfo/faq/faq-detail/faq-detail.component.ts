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
  protected id:string;
  @Input()
  protected identityField:string;
  @Input()
  protected identityValue:string;

  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(
      
      protected faqService: FaqService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                faqService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('question');
          this.stringFields.push('answer');







          this.textEditorMap['faqDetailAnswer'] = {
            fieldName: 'answer'
          };
  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.identityField && this.identityValue) {
        // search item based on the unique value
        this.populateDetailByField(this.identityField, this.identityValue);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
