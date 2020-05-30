import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupListComponent } from './musergroup-list.component';
import { MusergroupService } from '../musergroup.service';

@Component({
  selector: 'app-musergroup-list-select',
  templateUrl: './musergroup-list-select.component.html',
  styleUrls: ['./musergroup-list.component.css']
})
export class MusergroupListSelectComponent extends MusergroupListComponent
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public musergroupService: MusergroupService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(musergroupService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
