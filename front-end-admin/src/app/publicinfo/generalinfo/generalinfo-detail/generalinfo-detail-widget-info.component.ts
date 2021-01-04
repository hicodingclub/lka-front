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
  GeneralinfoService
} from '../generalinfo.service';
import {
  GeneralinfoDetailComponent
} from './generalinfo-detail.component';
@Component({
  selector: 'app-generalinfo-detail-widget-info',
  templateUrl: './generalinfo-detail-widget-info.component.html',
  styleUrls: ['./generalinfo-detail.component.css', './generalinfo-detail-widget-info.component.css']
})
export class GeneralinfoDetailWidgetInfoComponent extends GeneralinfoDetailComponent implements OnInit, AfterViewInit {
  constructor(public generalinfoService: GeneralinfoService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(generalinfoService, injector, router, route, location);
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}