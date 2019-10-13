import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MfilelabelsComponent, ViewType } from '../mfilelabels.component';
import { MfilelabelsService } from '../mfilelabels.service';

@Component({
  selector: 'app-mfilelabels-detail-field',
  templateUrl: './mfilelabels-detail-field.component.html',
  styleUrls: ['./mfilelabels-detail.component.css']
})
export class MfilelabelsDetailFieldComponent extends MfilelabelsComponent
        implements OnInit {
    @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public mfilelabelsService: MfilelabelsService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                mfilelabelsService, injector, router, route, location, ViewType.DETAIL);
          

          this.stringFields.push('label');


          this.dateFields = ['created', ];





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