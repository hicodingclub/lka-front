import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountComponent, ViewType } from '../maccount.component';
import { MaccountService } from '../maccount.service';

@Component({
  selector: 'app-maccount-detail-field',
  templateUrl: './maccount-detail-field.component.html',
  styleUrls: ['./maccount-detail.component.css']
})
export class MaccountDetailFieldComponent extends MaccountComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public maccountService: MaccountService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                maccountService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'username': 'Username',
            'email': 'Email',
            'phone': 'Phone',
            'firstname': 'Firstname',
            'lastname': 'Lastname',
            'since': 'Since',
            'status': 'Status',
          };
          this.enums['status'] = [
            'Enabled',
            'Disabled',
            'Pending',
          ];
          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('firstname');
          this.stringFields.push('lastname');
          this.stringFields.push('status');
          this.dateFields = [
            'since',
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
