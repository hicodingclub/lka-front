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
  MroleListComponent
} from './mrole-list.component';
import {
  MroleService
} from '../mrole.service';
@Component({
  selector: 'app-mrole-list-select',
  templateUrl: './mrole-list-select.component.html',
  styleUrls: ['./mrole-list.component.css']
})
export class MroleListSelectComponent extends MroleListComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public mroleService: MroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mroleService, injector, router, route, location);
    this.majorUi = false;
    this.itemMultiSelect = false;
  }
  ngOnInit() {
    this.selectedId = this.inputData;
    this.populateList();
  }
}