import {
  Component,
  OnInit,
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
  MpermissionDetailComponent
} from './mpermission-detail.component';
import {
  MpermissionService
} from '../mpermission.service';
@Component({
  selector: 'app-mpermission-detail-sub',
  templateUrl: './mpermission-detail-sub.component.html',
  styleUrls: ['./mpermission-detail.component.css']
})
export class MpermissionDetailSubComponent extends MpermissionDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public mpermissionService: MpermissionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, mpermissionService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}