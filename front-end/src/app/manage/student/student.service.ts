import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentBaseService } from './student.base.service';
import { Manage_SERVER_ROOT_URI } from '../manage.tokens';

@Injectable()
export class StudentService extends StudentBaseService implements OnDestroy {    
    constructor(
        http: HttpClient,
        @Inject(Manage_SERVER_ROOT_URI) private manageServerRootUri: string) {
        super(http, manageServerRootUri);
    }
    ngOnDestroy() { }
}
