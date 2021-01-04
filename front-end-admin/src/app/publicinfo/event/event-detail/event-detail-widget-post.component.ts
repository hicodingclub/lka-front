import {
  Component,
  OnInit,
  AfterViewInit,
  Input
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
  EventService
} from '../event.service';
import {
  EventDetailComponent
} from './event-detail.component';
@Component({
  selector: 'app-event-detail-widget-post',
  templateUrl: './event-detail-widget-post.component.html',
  styleUrls: ['./event-detail.component.css', './event-detail-widget-post.component.css']
})
export class EventDetailWidgetPostComponent extends EventDetailComponent implements OnInit, AfterViewInit {
  constructor(public eventService: EventService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(eventService, injector, router, route, location);
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}