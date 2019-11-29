import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TermsListComponent } from './terms-list.component';
import { TermsService } from '../terms.service';

@Component({
  selector: 'app-terms-list-select',
  templateUrl: './terms-list-select.component.html',
  styleUrls: ['./terms-list.component.css']
})
export class TermsListSelectComponent extends TermsListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public termsService: TermsService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(termsService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
