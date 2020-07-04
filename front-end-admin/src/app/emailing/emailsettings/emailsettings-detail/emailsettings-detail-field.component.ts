import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmailsettingsComponent, ViewType } from '../emailsettings.component';
import { EmailsettingsService } from '../emailsettings.service';

@Component({
  selector: 'app-emailsettings-detail-field',
  templateUrl: './emailsettings-detail-field.component.html',
  styleUrls: ['./emailsettings-detail.component.css']
})
export class EmailsettingsDetailFieldComponent extends EmailsettingsComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public emailsettingsService: EmailsettingsService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                emailsettingsService, injector, router, route, location);
          this.view = ViewType.DETAIL;
          
          this.fieldDisplayNames = {
            'settingName': 'Setting Name',
            'defaultSender': 'Default Sender Email Address',
          };
          this.stringFields.push('settingName');
          this.stringFields.push('defaultSender');
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
