import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentDetailComponent } from './student-detail.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail-sel',
  templateUrl: './student-detail-sel.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailSelComponent extends StudentDetailComponent 
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        public studentService: StudentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(studentService, injector, router, route, location);
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
