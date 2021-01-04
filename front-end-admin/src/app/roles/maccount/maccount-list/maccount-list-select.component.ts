import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  AfterViewInit
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
  MaccountListComponent
} from './maccount-list.component';
import {
  MaccountService
} from '../maccount.service';
@Component({
  selector: 'app-maccount-list-select',
  templateUrl: './maccount-list-select.component.html',
  styleUrls: ['./maccount-list.component.css']
})
export class MaccountListSelectComponent extends MaccountListComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public maccountService: MaccountService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountService, injector, router, route, location);
    this.majorUi = false;
    this.itemMultiSelect = false;
  }
  ngOnInit() {
    this.selectedId = this.inputData;
    this.populateList();
  }
}