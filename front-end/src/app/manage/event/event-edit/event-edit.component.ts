import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { EventComponent, ViewType } from '../event.component';
import { EventService } from '../event.service';




import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextSelectDirective } from 'mean-rest-angular';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent extends EventComponent implements OnInit {        
    @Input() 
    protected id: string;
    @Input()
    protected cid: string;//copy id
    @Input()
    protected initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output() done = new EventEmitter<boolean>();

    private action:string;


    @ViewChildren(MraRichTextSelectDirective) textEditors: QueryList<MraRichTextSelectDirective>;
  
    private eventEditContent = {valid: true};

        
    constructor(
      
      protected eventService: EventService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( 
                 eventService, commonService, router, route, location, ViewType.EDIT);


          this.stringFields.push('title');
          this.stringFields.push('author');
          this.stringFields.push('content');




          this.textEditorMap['eventEditContent'] = {
            required: true ,
            
            
            
            fieldState: this.eventEditContent,
            fieldName: 'content'
          };
          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action="Edit";
            this.populateDetail(this.id);
        }
        else {
            this.action="Create";
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else if (this.initData) {
                this.action="Add";
                this.subEdit = true;
                let detail = {
                    
                };
                for (let prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            } else {
                let detail = {
                    
                };
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
