import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Component, OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { StudentclassService } from './studentclass.service';

const itemCamelName = 'student Class';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { AcademicsRefSelectDirective } from '../academics.component';

import { StudentDetailSelComponent } from '../student/student-detail/student-detail-sel.component';
import { StudentDetailPopComponent } from '../student/student-detail/student-detail-pop.component';
import { StudentListSelectComponent } from '../student/student-list/student-list-select.component';
import { ClassDetailSelComponent } from '../class/class-detail/class-detail-sel.component';
import { ClassDetailPopComponent } from '../class/class-detail/class-detail-pop.component';
import { ClassListSelectComponent } from '../class/class-list/class-list-select.component';


@Component({
    template: '',
})
export class StudentclassComponent extends MddsBaseComponent implements OnInit {
    // *** common input fields
    @Input()
    public style: any; // {}
    @Input()
    public options: any; // {} uiOptions
    @Input()
    public searchObj: any;

    // *** list component
    @Input()
    public inputData: any;
    @Input()
    public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
    @Input()
    public categoryBy:string; //field name whose value is used as category

    // list-asso component
    @Input('asso') public associationField: string;

    // list select component
    @Output() outputData: any;

    // *** edit / create component
    @Input() 
    public id: string;
    @Input()
    public cid: string; // copy id
    @Input()
    public initData: any; // some fields has data already. eg: {a: b}. Used for add
    @Input()
    public embeddedView: boolean;
    @Input()
    public embedMode: string; // parent to tell the action - create
    @Output()
    public doneData = new EventEmitter<boolean>();
    @Output()
    public done = new EventEmitter<any>();

    // *** detail component
    // @Input() 
    // public id:string;
    @Input()
    public disableActionButtons:boolean;
    @Output()
    public eventEmitter: EventEmitter<any> = new EventEmitter();

    // detail sub component
    // @Input() inputData;

    // detail show field component
    // @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;

    // detail sel component
    //@Input() inputData;
    //@Output() outputData;

    // detail pop component
    // @Input() inputData;
    // @Output() outputData;


    public selectComponents = {

      'student': {
          'select-type': StudentListSelectComponent,
          'select-detail-type': StudentDetailSelComponent,
          'pop-detail-type': StudentDetailPopComponent,
          'componentRef': null},
      'class': {
          'select-type': ClassListSelectComponent,
          'select-detail-type': ClassDetailSelComponent,
          'pop-detail-type': ClassDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AcademicsRefSelectDirective, {static: true}) refSelectDirective: AcademicsRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public studentclassService: StudentclassService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {

        super(studentclassService, injector, router, route, location);
        this.setItemNames(itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['student', 'Student']);this.briefFieldsInfo.push(['class', 'Class']);


        this.referenceFieldsMap = {'student': 'student','class': 'class',};
        this.referenceFieldsReverseMap = {'student': 'student','class': 'class',};
        this.requiredFields = ['student','class',];

        this.schemaName = 'studentclass';
        
        this.modulePath = 'academics';
        this.indexFields = ['student', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
