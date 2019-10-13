import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MfileComponent, ViewType } from '../mfile.component';
import { MfileService } from '../mfile.service';

@Component({
  selector: 'app-mfile-detail-field',
  templateUrl: './mfile-detail-field.component.html',
  styleUrls: ['./mfile-detail.component.css']
})
export class MfileDetailFieldComponent extends MfileComponent
        implements OnInit {
    @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public mfileService: MfileService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                mfileService, injector, router, route, location, ViewType.DETAIL);
          

          this.stringFields.push('name');
          this.stringFields.push('type');
          this.stringFields.push('link');


          this.dateFields = ['uploaded', ];



          this.arrayFields = [['labels', 'SchemaString'],];


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