import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmaillogComponent, ViewType } from '../emaillog.component';
import { EmaillogService } from '../emaillog.service';

@Component({
  selector: 'app-emaillog-detail-field',
  templateUrl: './emaillog-detail-field.component.html',
  styleUrls: ['./emaillog-detail.component.css']
})
export class EmaillogDetailFieldComponent extends EmaillogComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public emaillogService: EmaillogService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                emaillogService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'from': 'From',
            'to': 'To',
            'subject': 'Subject',
            'content': 'Content',
            'template': 'Template',
            'module': 'Module',
            'reason': 'Reason',
            'result': 'Result',
            'userId': 'User Id',
            'createdAt': 'Created at',
          };


          this.stringFields.push('from');
          this.stringFields.push('to');
          this.stringFields.push('subject');
          this.stringFields.push('content');
          this.stringFields.push('template');
          this.stringFields.push('module');
          this.stringFields.push('reason');
          this.stringFields.push('result');
          this.stringFields.push('userId');


          this.dateFields = ['createdAt', ];








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
