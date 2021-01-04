import {
  Component,
  OnInit,
  AfterViewInit,
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
  StudentDetailCustComponent
} from '../../../academics-cust/base/student/student-detail.cust.component';
import {
  ViewType
} from '../student.component';
import {
  StudentService
} from '../student.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent extends StudentDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public studentService: StudentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(studentService, injector, router, route, location);
    this.view = ViewType.DETAIL;
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
      'notes': 'Notes',
      'muser_id': 'Muser Id',
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
    this.stringFields.push('notes');
    this.stringFields.push('muser_id');
    this.dateFields = ['date_of_birth', ];
    this.numberFields = ['grade', ];
    this.textareaFields = ['notes', ];
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.populateDetail(this.id);
    } else if (this.searchObj) {
      // search item based on the unique value
      this.populateDetailByFields(this.searchObj);
    } else {
      console.error("Routing error for detail view... no id...");
      return;
    }
  }
  ngAfterViewInit() {
    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./classenroll/list', {}], {
        relativeTo: this.route,
        queryParamsHandling: 'preserve',
      });
    }
  }
}