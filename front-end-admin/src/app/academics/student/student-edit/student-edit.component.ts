import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentComponent, ViewType } from '../student.component';
import { StudentService } from '../student.service';



import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[studentDirectiveEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentDirectiveEmail, multi: true}]
})
export class StudentDirectiveEmail implements Validator {
  validators:any[] = [
      
         {validator: function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
},
          msg: `Please fill a valid email address.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'studentDirectiveEmail': obj.msg };
            } catch (e) {
                return { 'studentDirectiveEmail': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[studentDirectivePhoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentDirectivePhoneNumber, multi: true}]
})
export class StudentDirectivePhoneNumber implements Validator {
  validators:any[] = [
      
         {validator: function(phone) {
  var re = /^(\d+-?)+\d+$/;
  return re.test(phone)
},
          msg: `Please fill a valid phone number.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'studentDirectivePhoneNumber': obj.msg };
            } catch (e) {
                return { 'studentDirectivePhoneNumber': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[studentDirectiveGuardianOnePhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentDirectiveGuardianOnePhone, multi: true}]
})
export class StudentDirectiveGuardianOnePhone implements Validator {
  validators:any[] = [
      
         {validator: function(phone) {
  var re = /^(\d+-?)+\d+$/;
  return re.test(phone)
},
          msg: `Please fill a valid phone number.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'studentDirectiveGuardianOnePhone': obj.msg };
            } catch (e) {
                return { 'studentDirectiveGuardianOnePhone': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[studentDirectiveGuardianOneEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentDirectiveGuardianOneEmail, multi: true}]
})
export class StudentDirectiveGuardianOneEmail implements Validator {
  validators:any[] = [
      
         {validator: function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
},
          msg: `Please fill a valid email address.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'studentDirectiveGuardianOneEmail': obj.msg };
            } catch (e) {
                return { 'studentDirectiveGuardianOneEmail': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[studentDirectiveGuardianTwoPhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentDirectiveGuardianTwoPhone, multi: true}]
})
export class StudentDirectiveGuardianTwoPhone implements Validator {
  validators:any[] = [
      
         {validator: function(phone) {
  var re = /^(\d+-?)+\d+$/;
  return re.test(phone)
},
          msg: `Please fill a valid phone number.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'studentDirectiveGuardianTwoPhone': obj.msg };
            } catch (e) {
                return { 'studentDirectiveGuardianTwoPhone': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[studentDirectiveGuardianTwoEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentDirectiveGuardianTwoEmail, multi: true}]
})
export class StudentDirectiveGuardianTwoEmail implements Validator {
  validators:any[] = [
      
         {validator: function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
},
          msg: `Please fill a valid email address.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'studentDirectiveGuardianTwoEmail': obj.msg };
            } catch (e) {
                return { 'studentDirectiveGuardianTwoEmail': obj.msg };
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
export class StudentEditComponent extends StudentComponent implements OnInit {        
    @Input() 
    public id: string;
    @Input()
    public cid: string;//copy id
    @Input()
    public initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output()
    public done = new EventEmitter<boolean>();
    @Input()
    public embeddedView: boolean;

    public action:string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};


        
    constructor(
      
      public studentService: StudentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super( 
                 studentService, injector, router, route, location, ViewType.EDIT);


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
          this.stringFields.push('muser_id');


          this.dateFields = ['date_of_birth', ];





          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action="Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action="Create";
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else if (this.initData) {
                this.action="Add";
                let detail = {
                    
                };
                for (let prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            } else {
                let detail = {
                    
                };
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
