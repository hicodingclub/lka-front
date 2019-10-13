import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassComponent, ViewType } from '../class.component';
import { ClassService } from '../class.service';





import { ComponentFactoryResolver } from '@angular/core';

import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextSelectDirective } from 'mean-rest-angular';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent extends ClassComponent implements OnInit {        
    @Input() 
    public id: string;
    @Input()
    public cid: string;//copy id
    @Input()
    public initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output()
    public done = new EventEmitter<boolean>();
    @Input()
    public embeddedView: boolean;

    public action:string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};


    @ViewChildren(MraRichTextSelectDirective) textEditors: QueryList<MraRichTextSelectDirective>;
  
    private EditDescription = {valid: true};

        
    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public classService: ClassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super( componentFactoryResolver,
                 classService, injector, router, route, location, ViewType.EDIT);

          this.enums['dayOfWeek'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];

          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('price');
          this.stringFields.push('season');
          this.stringFields.push('duration');
          this.stringFields.push('timeSlot');

          this.referenceFields = ['course', 'teacher', 'enrollTerm', ];
          this.referenceFieldsMap = {'course': 'course','teacher': 'teacher','enrollTerm': 'terms',};
          this.referenceFieldsReverseMap = {'course': 'course','teacher': 'teacher','terms': 'enrollTerm',};

          this.dateFields = ['startTime', 'endTime', ];


          this.multiSelectionFields = ['dayOfWeek', ];




          this.textEditorMap['EditDescription'] = {
            required: true ,
            
            
            
            fieldState: this.EditDescription,
            fieldName: 'description'
          };
          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
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
            } else if (this.initData) {
                this.action="Add";
                let detail = {
                    dayOfWeek: ["Mon"],hot: false,
                };
                for (let prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            } else {
                let detail = {
                    dayOfWeek: ["Mon"],hot: false,
                };
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
