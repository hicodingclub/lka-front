import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MuserEditComponent } from './muser-edit.component';
import { MuserService } from '../muser.service';


import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';
@Directive({
  selector: '[passwordValidateEqual]',
  providers: [{provide: NG_VALIDATORS, useExisting: PassswordEqualValidator, multi: true}]
})
export class PassswordEqualValidator implements Validator {
    constructor( @Attribute('passwordValidateEqual') public passwordField: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;

        // control value (e.g. password)
        let e = c.root.get(this.passwordField);

        // value not equal
        if (e && v !== e.value) return {
            passwordValidateEqual: "Passwords doesn't match"
        }
        return null;
    }
}

@Component({
  selector: 'app-muser-pass',
  templateUrl: './muser-pass.component.html',
  styleUrls: ['./muser-edit.component.css']
})
export class MuserPassComponent extends MuserEditComponent implements OnInit {        
    @Input() 
    public id: string;
    @Output() done = new EventEmitter<boolean>();
    @Input()
    public embeddedView: boolean;
  
    constructor(
      public muserService: MuserService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super( 
                 muserService, injector, router, route, location);
    }

    ngOnInit() {
        if (this.id) {
            ;
        } else {
            this.id = this.route.snapshot.paramMap.get('id');
        }
        this.action="Edit";
        this.populateDetailForAction(this.id, "edit");
    }
}
