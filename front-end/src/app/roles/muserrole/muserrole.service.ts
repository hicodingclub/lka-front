import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MuserroleBaseService } from './muserrole.base.service';
import { Roles_SERVER_ROOT_URI } from '../roles.tokens';

@Injectable()
export class MuserroleService extends MuserroleBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Roles_SERVER_ROOT_URI) private rolesServerRootUri: string) {
        super(http, rolesServerRootUri);
    }
    ngOnDestroy() { }
}
