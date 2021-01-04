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
  TeacherComponent,
  ViewType
} from '../teacher.component';
import {
  TeacherService
} from '../teacher.service';
@Component({
  selector: 'app-teacher-detail-field',
  templateUrl: './teacher-detail-field.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailFieldComponent extends TeacherComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public teacherService: TeacherService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, teacherService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'firstName': 'First Name',
      'lastName': 'Last Name',
      'email': 'Email',
      'phoneNumber': 'Phone Number',
      'courses': 'Program',
      'introduction': 'Introduction',
      'photo': 'Photo',
    };
    this.stringFields.push('firstName');
    this.stringFields.push('lastName');
    this.stringFields.push('email');
    this.stringFields.push('phoneNumber');
    this.stringFields.push('introduction');
    this.stringFields.push('photo');
    this.referenceFields = ['courses', ];
    this.textareaFields = ['introduction', ];
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