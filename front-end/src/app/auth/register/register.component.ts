import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../auth.service';

const validatePasswords = function(form) {
    let passwordConf = form.controls.password_conf.value;
    let password = form.controls.password.value;

    if (passwordConf == password) {
        return null;
    } else {
        form.controls.password_conf.setErrors({'passwordNotSame': true});
        return null;
    }
}

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: AuthenticationService) { }


    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_conf: ['', [Validators.required, Validators.minLength(6)]]
        }, {validator: validatePasswords });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['auth/login']);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }
}
