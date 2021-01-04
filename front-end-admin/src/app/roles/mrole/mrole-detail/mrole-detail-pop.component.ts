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
  MroleDetailComponent
} from './mrole-detail.component';
import {
  MroleService
} from '../mrole.service';
@Component({
  selector: 'app-mrole-detail-pop',
  templateUrl: './mrole-detail-pop.component.html',
  styleUrls: ['./mrole-detail.component.css']
})
export class MroleDetailPopComponent extends MroleDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public mroleService: MroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mroleService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}