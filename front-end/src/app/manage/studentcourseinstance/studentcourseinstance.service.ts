import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentcourseinstanceBaseService } from './studentcourseinstance.base.service';
import { Manage_SERVER_ROOT_URI } from '../manage.tokens';

@Injectable()
export class StudentcourseinstanceService extends StudentcourseinstanceBaseService implements OnDestroy {    
    constructor(
        http: HttpClient,
        @Inject(Manage_SERVER_ROOT_URI) private manageServerRootUri: string) {
        super(http, manageServerRootUri);
    }
    ngOnDestroy() { }
}