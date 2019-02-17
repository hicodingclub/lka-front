import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MroleListComponent } from './mrole-list.component';
import { MroleService } from '../mrole.service';

@Component({
  selector: 'app-mrole-select',
  templateUrl: './mrole-select.component.html',
  styleUrls: ['./mrole-list.component.css']
})
export class MroleSelectComponent extends MroleListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected mroleService: MroleService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(mroleService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
