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
  StudentclassComponent,
  ViewType
} from '../studentclass.component';
import {
  StudentclassService
} from '../studentclass.service';
@Component({
  selector: 'app-studentclass-detail-field',
  templateUrl: './studentclass-detail-field.component.html',
  styleUrls: ['./studentclass-detail.component.css']
})
export class StudentclassDetailFieldComponent extends StudentclassComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public studentclassService: StudentclassService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, studentclassService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'student': 'Student',
      'class': 'Class',
    };
    this.referenceFields = ['student', 'class', ];
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