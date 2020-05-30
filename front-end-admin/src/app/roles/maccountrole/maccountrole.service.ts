import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaccountroleBaseService } from './maccountrole.base.service';
import { Roles_SERVER_ROOT_URI } from '../roles.tokens';

@Injectable()
export class MaccountroleService extends MaccountroleBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Roles_SERVER_ROOT_URI) private rolesServerRootUri: string) {
        super(http, rolesServerRootUri);
    }
    ngOnDestroy() { }
}
