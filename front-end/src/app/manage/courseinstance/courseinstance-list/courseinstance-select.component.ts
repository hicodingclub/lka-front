import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { CourseinstanceListComponent } from './courseinstance-list.component';
import { CourseinstanceService } from '../courseinstance.service';

@Component({
  selector: 'app-courseinstance-select',
  templateUrl: './courseinstance-select.component.html',
  styleUrls: ['./courseinstance-list.component.css']
})
export class CourseinstanceSelectComponent extends CourseinstanceListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected courseinstanceService: CourseinstanceService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(null,courseinstanceService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
