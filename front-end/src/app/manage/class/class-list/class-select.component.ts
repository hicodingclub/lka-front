import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-select',
  templateUrl: './class-select.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassSelectComponent extends ClassListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected classService: ClassService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(null,classService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
