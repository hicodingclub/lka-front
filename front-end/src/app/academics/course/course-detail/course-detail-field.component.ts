import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { CourseComponent, ViewType } from '../course.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail-field',
  templateUrl: './course-detail-field.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailFieldComponent extends CourseComponent
        implements OnInit {
    @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public courseService: CourseService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                courseService, injector, router, route, location, ViewType.DETAIL);
          

          this.stringFields.push('title');
          this.stringFields.push('description');







    }

    ngOnInit() {
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}