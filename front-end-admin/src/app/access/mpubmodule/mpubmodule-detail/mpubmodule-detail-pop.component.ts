import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleDetailComponent } from './mpubmodule-detail.component';
import { MpubmoduleService } from '../mpubmodule.service';

@Component({
  selector: 'app-mpubmodule-detail-pop',
  templateUrl: './mpubmodule-detail-pop.component.html',
  styleUrls: ['./mpubmodule-detail.component.css']
})
export class MpubmoduleDetailPopComponent extends MpubmoduleDetailComponent 
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        public mpubmoduleService: MpubmoduleService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(mpubmoduleService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }

    ngAfterViewInit() {
    }
}
