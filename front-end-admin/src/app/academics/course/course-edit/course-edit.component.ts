import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { CourseComponent, ViewType } from '../course.component';
import { CourseService } from '../course.service';






import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextSelectDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent extends CourseComponent implements OnInit, AfterViewInit {        
    @Input() 
    public id: string;
    @Input()
    public cid: string;//copy id
    @Input()
    public initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output()
    public doneData = new EventEmitter<boolean>();
    @Output()
    public done = new EventEmitter<any>();
    @Input()
    public embeddedView: boolean;
    @Input()
    public embedMode: string; // parent to tell the action - create

    public action:string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};


    @ViewChildren(MraRichTextSelectDirective) textEditors: QueryList<MraRichTextSelectDirective>;
  
    private EditDescription = {valid: true};

        
    constructor(
      
      public courseService: CourseService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super( 
                 courseService, injector, router, route, location, ViewType.EDIT);


          this.stringFields.push('title');
          this.stringFields.push('description');









          this.textEditorMap['EditDescription'] = {
            required: true ,
            
            
            
            fieldState: this.EditDescription,
            fieldName: 'description'
          };
          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
      if (this.embedMode == 'create') { // parent ask to create
        this.action="Create";
        this.getDetailData();
      } else {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action="Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action="Create";
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else {
              this.getDetailData();
            }
        }
      }
    }

    ngAfterViewInit() {
      // Initialize all tooltips
      $('[data-toggle="tooltip"]').tooltip();
    }

    getDetailData() {
      if (this.initData) {
        this.action="Add";
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
