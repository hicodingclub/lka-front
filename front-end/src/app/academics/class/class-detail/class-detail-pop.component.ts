import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassDetailComponent } from './class-detail.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-detail-pop',
  templateUrl: './class-detail-pop.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailPopComponent extends ClassDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected classService: ClassService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,classService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}