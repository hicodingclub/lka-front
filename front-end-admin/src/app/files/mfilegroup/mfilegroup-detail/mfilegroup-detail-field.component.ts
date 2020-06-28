import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MfilegroupComponent, ViewType } from '../mfilegroup.component';
import { MfilegroupService } from '../mfilegroup.service';

@Component({
  selector: 'app-mfilegroup-detail-field',
  templateUrl: './mfilegroup-detail-field.component.html',
  styleUrls: ['./mfilegroup-detail.component.css']
})
export class MfilegroupDetailFieldComponent extends MfilegroupComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public mfilegroupService: MfilegroupService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                mfilegroupService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'name': 'Name',
            'createdAt': 'Created at',
          };
          this.stringFields.push('name');
          this.dateFields = [
            'createdAt',
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
