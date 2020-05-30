import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentComponent, ViewType } from '../student.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail-field',
  templateUrl: './student-detail-field.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailFieldComponent extends StudentComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public studentService: StudentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                studentService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'date_of_birth': 'Date of Birth',
            'grade': 'Grade',
            'email': 'Email',
            'phoneNumber': 'Phone Number',
            'school': 'School',
            'GuardianOneName': 'Guardian One Name',
            'GuardianOnePhone': 'Guardian One Phone',
            'GuardianOneEmail': 'Guardian One Email',
            'GuardianTwoName': 'Guardian Two Name',
            'GuardianTwoPhone': 'Guardian Two Phone',
            'GuardianTwoEmail': 'Guardian Two Email',
          };


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('school');
          this.stringFields.push('GuardianOneName');
          this.stringFields.push('GuardianOnePhone');
          this.stringFields.push('GuardianOneEmail');
          this.stringFields.push('GuardianTwoName');
          this.stringFields.push('GuardianTwoPhone');
          this.stringFields.push('GuardianTwoEmail');


          this.dateFields = ['date_of_birth', ];

          this.numberFields = ['grade', ];







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
