import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassenrollDetailComponent } from './classenroll-detail.component';
import { ClassenrollService } from '../classenroll.service';

@Component({
  selector: 'app-classenroll-detail-sub',
  templateUrl: './classenroll-detail-sub.component.html',
  styleUrls: ['./classenroll-detail.component.css']
})
export class ClassenrollDetailSubComponent extends ClassenrollDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        public classenrollService: ClassenrollService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,classenrollService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}