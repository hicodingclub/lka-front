import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MmoduleDetailComponent } from './mmodule-detail.component';
import { MmoduleService } from '../mmodule.service';

@Component({
  selector: 'app-mmodule-detail-pop',
  templateUrl: './mmodule-detail-pop.component.html',
  styleUrls: ['./mmodule-detail.component.css']
})
export class MmoduleDetailPopComponent extends MmoduleDetailComponent 
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        public mmoduleService: MmoduleService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(mmoduleService, injector, router, route, location);
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
