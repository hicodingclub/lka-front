import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleListComponent } from './mpubmodule-list.component';
import { MpubmoduleService } from '../mpubmodule.service';

@Component({
  selector: 'app-mpubmodule-list-select',
  templateUrl: './mpubmodule-list-select.component.html',
  styleUrls: ['./mpubmodule-list.component.css']
})
export class MpubmoduleListSelectComponent extends MpubmoduleListComponent
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public mpubmoduleService: MpubmoduleService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(mpubmoduleService, injector, router, route, location);
            this.majorUi = false;
            this.itemMultiSelect = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
