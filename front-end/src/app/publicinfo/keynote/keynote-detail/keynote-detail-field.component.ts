import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteComponent, ViewType } from '../keynote.component';
import { KeynoteService } from '../keynote.service';

@Component({
  selector: 'app-keynote-detail-field',
  templateUrl: './keynote-detail-field.component.html',
  styleUrls: ['./keynote-detail.component.css']
})
export class KeynoteDetailFieldComponent extends KeynoteComponent
        implements OnInit {
    @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public keynoteService: KeynoteService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                keynoteService, injector, router, route, location, ViewType.DETAIL);
          

          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('subtitle');
          this.stringFields.push('description');








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
