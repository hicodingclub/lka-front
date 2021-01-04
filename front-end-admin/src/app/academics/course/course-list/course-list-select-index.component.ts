import {
  Component,
  OnInit
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  CourseListSelectComponent
} from './course-list-select.component';
import {
  CourseService
} from '../course.service';
@Component({
  selector: 'app-course-list-select-index',
  templateUrl: './course-list-select-index.component.html',
  styleUrls: ['./course-list.component.css', './course-list-select-index.component.css']
})
export class CourseListSelectIndexComponent extends CourseListSelectComponent
implements OnInit {
  constructor(public courseService: CourseService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(courseService, injector, router, route, location);
  }
  ngOnInit() {
    super.ngOnInit();
  }
}