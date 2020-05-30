import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubaccessDetailComponent } from './mpubaccess-detail.component';
import { MpubaccessService } from '../mpubaccess.service';

@Component({
  selector: 'app-mpubaccess-detail-sub',
  templateUrl: './mpubaccess-detail-sub.component.html',
  styleUrls: ['./mpubaccess-detail.component.css']
})
export class MpubaccessDetailSubComponent extends MpubaccessDetailComponent 
        implements OnInit {
    // @Input() inputData;
    
    constructor(
        public mpubaccessService: MpubaccessService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,mpubaccessService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }

    ngAfterViewInit() {
    }
}
