import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TermsComponent, ViewType } from '../terms.component';
import { TermsService } from '../terms.service';

@Component({
  selector: 'app-terms-detail-field',
  templateUrl: './terms-detail-field.component.html',
  styleUrls: ['./terms-detail.component.css']
})
export class TermsDetailFieldComponent extends TermsComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
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
