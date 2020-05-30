import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountDetailComponent } from './maccount-detail.component';
import { MaccountService } from '../maccount.service';

@Component({
  selector: 'app-maccount-detail-sel',
  templateUrl: './maccount-detail-sel.component.html',
  styleUrls: ['./maccount-detail.component.css']
})
export class MaccountDetailSelComponent extends MaccountDetailComponent 
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        public maccountService: MaccountService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(maccountService, injector, router, route, location);
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
