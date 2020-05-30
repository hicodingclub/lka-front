import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MroleBaseService } from './mrole.base.service';
import { Roles_SERVER_ROOT_URI } from '../roles.tokens';

@Injectable()
export class MroleService extends MroleBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Roles_SERVER_ROOT_URI) private rolesServerRootUri: string) {
        super(http, rolesServerRootUri);
    }
    ngOnDestroy() { }
}
