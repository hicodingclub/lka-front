import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassBaseService } from './class.base.service';
import { Manage_SERVER_ROOT_URI } from '../manage.tokens';

@Injectable()
export class ClassService extends ClassBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Manage_SERVER_ROOT_URI) private manageServerRootUri: string) {
        super(http, manageServerRootUri);
    }
    ngOnDestroy() { }
}
