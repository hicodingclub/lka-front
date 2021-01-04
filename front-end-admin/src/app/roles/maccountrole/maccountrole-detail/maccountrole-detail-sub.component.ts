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
  MaccountroleDetailComponent
} from './maccountrole-detail.component';
import {
  MaccountroleService
} from '../maccountrole.service';
@Component({
  selector: 'app-maccountrole-detail-sub',
  templateUrl: './maccountrole-detail-sub.component.html',
  styleUrls: ['./maccountrole-detail.component.css']
})
export class MaccountroleDetailSubComponent extends MaccountroleDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public maccountroleService: MaccountroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, maccountroleService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}