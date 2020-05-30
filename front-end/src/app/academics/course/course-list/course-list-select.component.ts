import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { CourseListComponent } from './course-list.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-select',
  templateUrl: './course-list-select.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListSelectComponent extends CourseListComponent
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public courseService: CourseService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(courseService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
