import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassDetailComponent } from './class-detail.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-detail-sub',
  templateUrl: './class-detail-sub.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailSubComponent extends ClassDetailComponent 
        implements OnInit {
    // @Input() inputData;
    
    constructor(
        public classService: ClassService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,classService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }

    ngAfterViewInit() {
    }
}
