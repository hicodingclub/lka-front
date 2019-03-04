import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupListComponent } from './musergroup-list.component';
import { MusergroupService } from '../musergroup.service';

@Component({
  selector: 'app-musergroup-select',
  templateUrl: './musergroup-select.component.html',
  styleUrls: ['./musergroup-list.component.css']
})
export class MusergroupSelectComponent extends MusergroupListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected musergroupService: MusergroupService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(musergroupService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
