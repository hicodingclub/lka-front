import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupComponent, ViewType } from '../musergroup.component';
import { MusergroupService } from '../musergroup.service';

@Component({
  selector: 'app-musergroup-detail-field',
  templateUrl: './musergroup-detail-field.component.html',
  styleUrls: ['./musergroup-detail.component.css']
})
export class MusergroupDetailFieldComponent extends MusergroupComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public musergroupService: MusergroupService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                musergroupService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'group': 'Group',
            'description': 'Description',
          };


          this.stringFields.push('group');
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
