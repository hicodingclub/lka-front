import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
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
  MfilegroupDetailComponent
} from './mfilegroup-detail.component';
import {
  MfilegroupService
} from '../mfilegroup.service';
@Component({
  selector: 'app-mfilegroup-detail-pop',
  templateUrl: './mfilegroup-detail-pop.component.html',
  styleUrls: ['./mfilegroup-detail.component.css']
})
export class MfilegroupDetailPopComponent extends MfilegroupDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public mfilegroupService: MfilegroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mfilegroupService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}