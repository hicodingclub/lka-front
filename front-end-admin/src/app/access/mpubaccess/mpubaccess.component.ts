import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { MpubaccessService } from './mpubaccess.service';

const itemCamelName = 'access Control';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { AccessRefSelectDirective } from '../access.component';

import { MusergroupDetailSelComponent } from '../musergroup/musergroup-detail/musergroup-detail-sel.component';
import { MusergroupDetailPopComponent } from '../musergroup/musergroup-detail/musergroup-detail-pop.component';
import { MusergroupListSelectComponent } from '../musergroup/musergroup-list/musergroup-list-select.component';
import { MpubmoduleDetailSelComponent } from '../mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';
import { MpubmoduleDetailPopComponent } from '../mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import { MpubmoduleListSelectComponent } from '../mpubmodule/mpubmodule-list/mpubmodule-list-select.component';


export class MpubaccessComponent extends MddsBaseComponent implements OnInit {
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
    public disableActionButtions:boolean;
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

      'group': {
          'select-type': MusergroupListSelectComponent,
          'select-detail-type': MusergroupDetailSelComponent,
          'pop-detail-type': MusergroupDetailPopComponent,
          'componentRef': null},
      'module': {
          'select-type': MpubmoduleListSelectComponent,
          'select-detail-type': MpubmoduleDetailSelComponent,
          'pop-detail-type': MpubmoduleDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(AccessRefSelectDirective, {static: true}) refSelectDirective: AccessRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public mpubaccessService: MpubaccessService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mpubaccessService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['group', 'Group']);this.briefFieldsInfo.push(['module', 'Module']);this.briefFieldsInfo.push(['modulePermission', 'Module Permission']);


        this.referenceFieldsMap = {'group': 'musergroup','module': 'mpubmodule',};
        this.referenceFieldsReverseMap = {'musergroup': 'group','mpubmodule': 'module',};
        this.requiredFields = ['group','module',];

        this.schemaName = 'mpubaccess';
        
        this.modulePath = 'access';
        this.indexFields = ['group', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
