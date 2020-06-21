import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { EmailqueueEditCustComponent } from '../../../emailing-cust/base/emailqueue/emailqueue-edit.cust.component';
import { ViewType } from '../emailqueue.component';
import { EmailqueueService } from '../emailqueue.service';






import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextSelectDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-emailqueue-edit',
  templateUrl: './emailqueue-edit.component.html',
  styleUrls: ['./emailqueue-edit.component.css']
})
export class EmailqueueEditComponent extends EmailqueueEditCustComponent implements OnInit, AfterViewInit {        
    // @Input() 
    // public id: string;
    // @Input()
    // public cid: string; // copy id
    // @Input()
    // public initData: any; // some fields has data already. eg: {a: b}. Used for add
    // @Output()
    // public doneData = new EventEmitter<boolean>();
    // @Output()
    // public done = new EventEmitter<any>();
    // @Input()
    // public embeddedView: boolean;
    // @Input()
    // public embedMode: string; // parent to tell the action - create

    public action: string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};


    @ViewChildren(MddsRichTextSelectDirective) textEditors: QueryList<MddsRichTextSelectDirective>;
  
    public EditContent: any = {valid: true};


    constructor(
      public emailqueueService: EmailqueueService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emailqueueService, injector, router, route, location, ViewType.EDIT);

          this.fieldDisplayNames = {
            'subject': 'Subject',
            'from': 'From',
            'to': 'To',
            'processed': 'Processed',
            'number': 'Number',
            'sent': 'Sent',
            'result': 'Result',
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
          this.numberFields = ['number', 'sent', ];

          this.textEditorMap['EditContent'] = {
            required:  false ,
            
            
            
            fieldState: this.EditContent,
            fieldName: 'content'
          };
          
          const detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
      super.ngOnInit();
      if (this.embedMode == 'create') { // parent ask to create
        this.action='Create';
        this.getDetailData();
      } else {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action='Edit';
            this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
        }
        else {
            this.action='Create';
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else {
              this.getDetailData();
            }
        }
      }
      // get editHintFields
      this.searchHintFieldValues();
    }

    ngAfterViewInit() {
      // Initialize all tooltips
      $('[data-toggle="tooltip"]').tooltip();
    }

    getDetailData() {
      if (this.initData) {
        this.action='Add';
        let detail = {
          processed: false,
          sent: 0,
        };
        for (let prop of Object.keys(this.initData)) {
            detail[prop] = this.initData[prop];
            this.hiddenFields.push(prop);
        }
        this.detail = this.formatDetail(detail);
      } else {
          let detail = {
            processed: false,
            sent: 0,
          };
          this.detail = this.formatDetail(detail);
      }
    }
}
