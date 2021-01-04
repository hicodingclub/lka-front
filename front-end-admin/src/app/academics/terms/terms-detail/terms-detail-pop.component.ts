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
  TermsDetailComponent
} from './terms-detail.component';
import {
  TermsService
} from '../terms.service';
@Component({
  selector: 'app-terms-detail-pop',
  templateUrl: './terms-detail-pop.component.html',
  styleUrls: ['./terms-detail.component.css']
})
export class TermsDetailPopComponent extends TermsDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public termsService: TermsService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(termsService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}