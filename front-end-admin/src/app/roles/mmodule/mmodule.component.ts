import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { MmoduleService } from './mmodule.service';

const itemCamelName = 'system Module';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class MmoduleComponent extends MddsBaseComponent implements OnInit {
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



    @ViewChild('RolesModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public mmoduleService: MmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mmoduleService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['module', 'Module']);this.briefFieldsInfo.push(['resources', 'Resources']);



        this.requiredFields = ['module',];


        this.schemaName = 'mmodule';
        
        this.modulePath = 'roles';
        this.indexFields = ['module', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
