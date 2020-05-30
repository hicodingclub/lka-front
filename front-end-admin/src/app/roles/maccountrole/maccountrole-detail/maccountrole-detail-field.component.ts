import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountroleComponent, ViewType } from '../maccountrole.component';
import { MaccountroleService } from '../maccountrole.service';

@Component({
  selector: 'app-maccountrole-detail-field',
  templateUrl: './maccountrole-detail-field.component.html',
  styleUrls: ['./maccountrole-detail.component.css']
})
export class MaccountroleDetailFieldComponent extends MaccountroleComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public maccountroleService: MaccountroleService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
                maccountroleService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'account': 'Account',
            'role': 'Role',
          };



          this.referenceFields = ['account', ];





          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';
          this.referenceFieldsReverseMap['mrole'] = 'role';




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
