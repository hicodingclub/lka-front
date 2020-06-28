import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubaccessComponent, ViewType } from '../mpubaccess.component';
import { MpubaccessService } from '../mpubaccess.service';

@Component({
  selector: 'app-mpubaccess-detail-field',
  templateUrl: './mpubaccess-detail-field.component.html',
  styleUrls: ['./mpubaccess-detail.component.css']
})
export class MpubaccessDetailFieldComponent extends MpubaccessComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public mpubaccessService: MpubaccessService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
                mpubaccessService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'group': 'Group',
            'module': 'Module',
            'modulePermission': 'Module Permission',
            'resourcePermission': 'Resource Permission',
          };
          this.stringFields.push('modulePermission');
          this.referenceFields = [
            'group',
            'module',
          ];
          this.mapFields = [
              ['resourcePermission', 'SchemaString', '', '', , ''],
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
