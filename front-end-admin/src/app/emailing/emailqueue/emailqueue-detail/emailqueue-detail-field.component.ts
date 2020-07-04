import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmailqueueComponent, ViewType } from '../emailqueue.component';
import { EmailqueueService } from '../emailqueue.service';

@Component({
  selector: 'app-emailqueue-detail-field',
  templateUrl: './emailqueue-detail-field.component.html',
  styleUrls: ['./emailqueue-detail.component.css']
})
export class EmailqueueDetailFieldComponent extends EmailqueueComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public emailqueueService: EmailqueueService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                emailqueueService, injector, router, route, location);
          this.view = ViewType.DETAIL;
          
          this.fieldDisplayNames = {
            'subject': 'Subject',
            'from': 'From',
            'to': 'To',
            'processed': 'Processed',
            'number': 'Number',
            'sent': 'Sent',
            'result': 'Result',
            'createdAt': 'Created at',
            'updatedAt': 'Updated at',
            'content': 'Content',
            'replacements': 'Replacements',
            'defaultReplacement': 'Default Replacement',
          };
          this.stringFields.push('subject');
          this.stringFields.push('from');
          this.stringFields.push('to');
          this.stringFields.push('result');
          this.stringFields.push('content');
          this.stringFields.push('replacements');
          this.stringFields.push('defaultReplacement');
          this.dateFields = [
            'createdAt',
            'updatedAt',
          ];
          this.numberFields = [
            'number',
            'sent',
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
