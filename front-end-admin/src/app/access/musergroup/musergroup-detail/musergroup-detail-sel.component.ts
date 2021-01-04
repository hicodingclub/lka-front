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
  MusergroupDetailComponent
} from './musergroup-detail.component';
import {
  MusergroupService
} from '../musergroup.service';
@Component({
  selector: 'app-musergroup-detail-sel',
  templateUrl: './musergroup-detail-sel.component.html',
  styleUrls: ['./musergroup-detail.component.css']
})
export class MusergroupDetailSelComponent extends MusergroupDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public musergroupService: MusergroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(musergroupService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}