import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../auth.service';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    passwordMatch = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: AuthenticationService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_conf: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        if (this.registerForm.controls.password.value !== this.registerForm.controls.password_conf.value) {
            this.registerForm.controls.password_conf.errors = {mismatch: true};
       		return;
        } else {
            passwordMatch = true;
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
