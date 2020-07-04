import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { FaqComponent, ViewType } from '../faq.component';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-detail-field',
  templateUrl: './faq-detail-field.component.html',
  styleUrls: ['./faq-detail.component.css']
})
export class FaqDetailFieldComponent extends FaqComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public faqService: FaqService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                faqService, injector, router, route, location);
          this.view = ViewType.DETAIL;
          
          this.fieldDisplayNames = {
            'question': 'Question',
            'answer': 'Answer',
            'order': 'Order',
            'enable': 'Enable',
          };
          this.stringFields.push('question');
          this.stringFields.push('answer');
          this.numberFields = [
            'order',
          ];
    }

    ngOnInit() {
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}
