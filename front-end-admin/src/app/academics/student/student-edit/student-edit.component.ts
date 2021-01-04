import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  Directive,
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
declare const $: any;
import {
  StudentEditCustComponent
} from '../../../academics-cust/base/student/student-edit.cust.component';
import {
  ViewType
} from '../student.component';
import {
  StudentService
} from '../student.service';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  AbstractControl,
  FormGroup
} from '@angular/forms';
@Directive({
  selector: '[academicsStudentDirectiveEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AcademicsStudentDirectiveEmail,
    multi: true
  }]
})
export class AcademicsStudentDirectiveEmail implements Validator {
  validators: any[] = [{
    validator: function(email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email)
    },
    msg: `Please fill a valid email address.`
  }, ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.
    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value: any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
      for (let idx = 0; idx < this.validators.length; idx++) {
        let obj = this.validators[idx];
        try {
          result = obj.validator(value)
          if (result == false) return {
            'academicsStudentDirectiveEmail': obj.msg
          };
        } catch (e) {
          return {
            'academicsStudentDirectiveEmail': obj.msg
          };
        }
      }
    }
    return null;
  }
}
@Directive({
  selector: '[academicsStudentDirectivePhoneNumber]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AcademicsStudentDirectivePhoneNumber,
    multi: true
  }]
})
export class AcademicsStudentDirectivePhoneNumber implements Validator {
  validators: any[] = [{
    validator: function(phone) {
      var re = /^(\d+-?)+\d+$/;
      return re.test(phone)
    },
    msg: `Please fill a valid phone number.`
  }, ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.
    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value: any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
      for (let idx = 0; idx < this.validators.length; idx++) {
        let obj = this.validators[idx];
        try {
          result = obj.validator(value)
          if (result == false) return {
            'academicsStudentDirectivePhoneNumber': obj.msg
          };
        } catch (e) {
          return {
            'academicsStudentDirectivePhoneNumber': obj.msg
          };
        }
      }
    }
    return null;
  }
}
@Directive({
  selector: '[academicsStudentDirectiveGuardianOnePhone]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AcademicsStudentDirectiveGuardianOnePhone,
    multi: true
  }]
})
export class AcademicsStudentDirectiveGuardianOnePhone implements Validator {
  validators: any[] = [{
    validator: function(phone) {
      var re = /^(\d+-?)+\d+$/;
      return re.test(phone)
    },
    msg: `Please fill a valid phone number.`
  }, ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.
    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value: any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
      for (let idx = 0; idx < this.validators.length; idx++) {
        let obj = this.validators[idx];
        try {
          result = obj.validator(value)
          if (result == false) return {
            'academicsStudentDirectiveGuardianOnePhone': obj.msg
          };
        } catch (e) {
          return {
            'academicsStudentDirectiveGuardianOnePhone': obj.msg
          };
        }
      }
    }
    return null;
  }
}
@Directive({
  selector: '[academicsStudentDirectiveGuardianOneEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AcademicsStudentDirectiveGuardianOneEmail,
    multi: true
  }]
})
export class AcademicsStudentDirectiveGuardianOneEmail implements Validator {
  validators: any[] = [{
    validator: function(email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email)
    },
    msg: `Please fill a valid email address.`
  }, ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.
    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value: any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
      for (let idx = 0; idx < this.validators.length; idx++) {
        let obj = this.validators[idx];
        try {
          result = obj.validator(value)
          if (result == false) return {
            'academicsStudentDirectiveGuardianOneEmail': obj.msg
          };
        } catch (e) {
          return {
            'academicsStudentDirectiveGuardianOneEmail': obj.msg
          };
        }
      }
    }
    return null;
  }
}
@Directive({
  selector: '[academicsStudentDirectiveGuardianTwoPhone]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AcademicsStudentDirectiveGuardianTwoPhone,
    multi: true
  }]
})
export class AcademicsStudentDirectiveGuardianTwoPhone implements Validator {
  validators: any[] = [{
    validator: function(phone) {
      var re = /^(\d+-?)+\d+$/;
      return re.test(phone)
    },
    msg: `Please fill a valid phone number.`
  }, ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.
    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value: any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
      for (let idx = 0; idx < this.validators.length; idx++) {
        let obj = this.validators[idx];
        try {
          result = obj.validator(value)
          if (result == false) return {
            'academicsStudentDirectiveGuardianTwoPhone': obj.msg
          };
        } catch (e) {
          return {
            'academicsStudentDirectiveGuardianTwoPhone': obj.msg
          };
        }
      }
    }
    return null;
  }
}
@Directive({
  selector: '[academicsStudentDirectiveGuardianTwoEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AcademicsStudentDirectiveGuardianTwoEmail,
    multi: true
  }]
})
export class AcademicsStudentDirectiveGuardianTwoEmail implements Validator {
  validators: any[] = [{
    validator: function(email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email)
    },
    msg: `Please fill a valid email address.`
  }, ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.
    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value: any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
      for (let idx = 0; idx < this.validators.length; idx++) {
        let obj = this.validators[idx];
        try {
          result = obj.validator(value)
          if (result == false) return {
            'academicsStudentDirectiveGuardianTwoEmail': obj.msg
          };
        } catch (e) {
          return {
            'academicsStudentDirectiveGuardianTwoEmail': obj.msg
          };
        }
      }
    }
    return null;
  }
}
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent extends StudentEditCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id: string;
  // @Input()
  // public cid: string; // copy id
  // @Input()
  // public initData: any; // some fields has data already. eg: {a: b}. Used for add
  // @Output()
  // public doneData = new EventEmitter<boolean>();
  // @Output()
  // public done = new EventEmitter<any>();
  // @Input()
  // public embeddedView: boolean;
  // @Input()
  // public embedMode: string; // parent to tell the action - create
  public action: string;
  public minDate = {
    year: (new Date()).getFullYear() - 100,
    month: 1,
    day: 1
  };
  constructor(public studentService: StudentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(studentService, injector, router, route, location);
    this.view = ViewType.EDIT;
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
    const detail = {};
    this.detail = this.formatDetail(detail);
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.embedMode == 'create') { // parent ask to create
      this.action = 'Create';
      this.getDetailData();
    } else {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.action = 'Edit';
        this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
      } else {
        this.action = 'Create';
        if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
        if (this.cid) {
          this.populateDetailFromCopy(this.cid);
        } else {
          this.getDetailData();
        }
      }
    }
    // get editHintFields
    this.searchHintFieldValues();
  }
  ngAfterViewInit() {
    // Initialize all tooltips
    $('[data-toggle="tooltip"]').tooltip();
  }
  getDetailData() {
    if (this.initData) {
      this.action = 'Add';
      let detail = {};
      for (let prop of Object.keys(this.initData)) {
        detail[prop] = this.initData[prop];
        this.hiddenFields.push(prop);
      }
      this.detail = this.formatDetail(detail);
    } else {
      let detail = {};
      this.detail = this.formatDetail(detail);
    }
  }
}