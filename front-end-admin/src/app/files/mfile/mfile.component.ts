import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { MfileService } from './mfile.service';

const itemCamelName = 'picture';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { FilesRefSelectDirective } from '../files.component';

import { MfilegroupDetailSelComponent } from '../mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component';
import { MfilegroupDetailPopComponent } from '../mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component';
import { MfilegroupListSelectIndexComponent } from '../mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component';


export class MfileComponent extends MddsBaseComponent implements OnInit {
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
          'select-type': MfilegroupListSelectIndexComponent,
          'select-detail-type': MfilegroupDetailSelComponent,
          'pop-detail-type': MfilegroupDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(FilesRefSelectDirective, {static: true}) refSelectDirective: FilesRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public mfileService: MfileService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(mfileService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['type', 'Type']);this.briefFieldsInfo.push(['group', 'Group']);this.briefFieldsInfo.push(['labels', 'Labels']);this.briefFieldsInfo.push(['size', 'Size']);this.briefFieldsInfo.push(['link', 'Link']);this.briefFieldsInfo.push(['createdAt', 'Created at']);this.briefFieldsInfo.push(['hasThumbnail', 'Has Thumbnail']);



        this.referenceFieldsMap = {'group': 'mfilegroup',};
        this.referenceFieldsReverseMap = {'mfilegroup': 'group',};


        this.schemaName = 'mfile';
        this.dateFormat = 'MM/DD/YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'files';
        this.indexFields = ['name', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
