import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmailqueueDetailCustComponent } from '../../../emailing-cust/base/emailqueue/emailqueue-detail.cust.component';
import { ViewType } from '../emailqueue.component';
import { EmailqueueService } from '../emailqueue.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-emailqueue-detail',
  templateUrl: './emailqueue-detail.component.html',
  styleUrls: ['./emailqueue-detail.component.css']
})
export class EmailqueueDetailComponent extends EmailqueueDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();


  @ViewChildren(MddsRichTextShowDirective) textEditors: QueryList<MddsRichTextShowDirective>;

  constructor(
      
      public emailqueueService: EmailqueueService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emailqueueService, injector, router, route, location, ViewType.DETAIL);

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
          this.dateFields = ['createdAt', 'updatedAt', ];
          this.numberFields = ['number', 'sent', ];
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
