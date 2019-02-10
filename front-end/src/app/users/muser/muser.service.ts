import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MuserBaseService } from './muser.base.service';
import { Users_SERVER_ROOT_URI } from '../users.tokens';

@Injectable()
export class MuserService extends MuserBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Users_SERVER_ROOT_URI) private usersServerRootUri: string) {
        super(http, usersServerRootUri);
    }
    ngOnDestroy() { }
}
