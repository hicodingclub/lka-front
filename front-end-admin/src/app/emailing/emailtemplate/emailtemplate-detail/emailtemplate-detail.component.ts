import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmailtemplateDetailCustComponent } from '../../../emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component';
import { ViewType } from '../emailtemplate.component';
import { EmailtemplateService } from '../emailtemplate.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-emailtemplate-detail',
  templateUrl: './emailtemplate-detail.component.html',
  styleUrls: ['./emailtemplate-detail.component.css']
})
export class EmailtemplateDetailComponent extends EmailtemplateDetailCustComponent implements OnInit, AfterViewInit {
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
      
      public emailtemplateService: EmailtemplateService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emailtemplateService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'templateName': 'Template Name',
            'fromEmail': 'From Email',
            'subject': 'Subject',
            'content': 'Content',
            'tag': 'Tag',
          };
          this.stringFields.push('templateName');
          this.stringFields.push('fromEmail');
          this.stringFields.push('subject');
          this.stringFields.push('content');
          this.stringFields.push('tag');
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
