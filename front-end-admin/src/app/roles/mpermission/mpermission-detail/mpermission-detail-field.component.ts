import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpermissionComponent, ViewType } from '../mpermission.component';
import { MpermissionService } from '../mpermission.service';

@Component({
  selector: 'app-mpermission-detail-field',
  templateUrl: './mpermission-detail-field.component.html',
  styleUrls: ['./mpermission-detail.component.css']
})
export class MpermissionDetailFieldComponent extends MpermissionComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public mpermissionService: MpermissionService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
                mpermissionService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'role': 'Role',
            'module': 'Module',
            'modulePermission': 'Module Permission',
            'resourcePermission': 'Resource Permission',
          };
          this.stringFields.push('modulePermission');
          this.referenceFields = [
            'role',
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
