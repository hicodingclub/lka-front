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
  GeneralinfoComponent,
  ViewType
} from '../generalinfo.component';
import {
  GeneralinfoService
} from '../generalinfo.service';
@Component({
  selector: 'app-generalinfo-detail-field',
  templateUrl: './generalinfo-detail-field.component.html',
  styleUrls: ['./generalinfo-detail.component.css']
})
export class GeneralinfoDetailFieldComponent extends GeneralinfoComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public generalinfoService: GeneralinfoService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(generalinfoService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'signaturePicture': 'Signature Picture',
      'title': 'Title',
      'description': 'Description',
    };
    this.stringFields.push('signaturePicture');
    this.stringFields.push('title');
    this.stringFields.push('description');
    this.textareaFields = ['description', ];
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