import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TeacherListComponent } from './teacher-list.component';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list-select',
  templateUrl: './teacher-list-select.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListSelectComponent extends TeacherListComponent
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public teacherService: TeacherService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(null,teacherService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
