import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmaillogDetailCustComponent } from '../../../emailing-cust/base/emaillog/emaillog-detail.cust.component';
import { ViewType } from '../emaillog.component';
import { EmaillogService } from '../emaillog.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-emaillog-detail',
  templateUrl: './emaillog-detail.component.html',
  styleUrls: ['./emaillog-detail.component.css']
})
export class EmaillogDetailComponent extends EmaillogDetailCustComponent implements OnInit, AfterViewInit {
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
