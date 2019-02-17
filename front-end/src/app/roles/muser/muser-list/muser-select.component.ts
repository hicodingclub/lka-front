import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserListComponent } from './muser-list.component';
import { MuserService } from '../muser.service';

@Component({
  selector: 'app-muser-select',
  templateUrl: './muser-select.component.html',
  styleUrls: ['./muser-list.component.css']
})
export class MuserSelectComponent extends MuserListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected muserService: MuserService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(muserService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
