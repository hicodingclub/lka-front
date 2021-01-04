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
  MmoduleComponent,
  ViewType
} from '../mmodule.component';
import {
  MmoduleService
} from '../mmodule.service';
@Component({
  selector: 'app-mmodule-detail-field',
  templateUrl: './mmodule-detail-field.component.html',
  styleUrls: ['./mmodule-detail.component.css']
})
export class MmoduleDetailFieldComponent extends MmoduleComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public mmoduleService: MmoduleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mmoduleService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'module': 'Module',
      'resources': 'Resources',
    };
    this.stringFields.push('module');
    this.arrayFields = [
      ['resources', 'SchemaString'],
    ];
  }
  ngOnInit() {
    if (!this.showFieldsStr) {
      console.error("A field has to be given to show it.");
      return;
    }
    this.showFields = this.showFieldsStr.match(/\S+/g);
    if (this.detailObj) {
      this.onDetailReturned(this.detailObj, null);
    } else {
      if (!this.id) this.id = this.id;
      if (this.id) this.populateDetail(this.id);
      else {
        console.error("No id provided to show info");
        return;
      }
    }
  }
}