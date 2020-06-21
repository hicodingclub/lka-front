import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MroleComponent, ViewType } from '../mrole.component';
import { MroleService } from '../mrole.service';

@Component({
  selector: 'app-mrole-detail-field',
  templateUrl: './mrole-detail-field.component.html',
  styleUrls: ['./mrole-detail.component.css']
})
export class MroleDetailFieldComponent extends MroleComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public mroleService: MroleService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                mroleService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'role': 'Role',
            'description': 'Description',
          };
          this.stringFields.push('role');
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
