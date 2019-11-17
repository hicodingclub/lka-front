import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentclassDetailComponent } from './studentclass-detail.component';
import { StudentclassService } from '../studentclass.service';

@Component({
  selector: 'app-studentclass-detail-sub',
  templateUrl: './studentclass-detail-sub.component.html',
  styleUrls: ['./studentclass-detail.component.css']
})
export class StudentclassDetailSubComponent extends StudentclassDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        public studentclassService: StudentclassService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,studentclassService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }

    ngAfterViewInit() {
    }
}
