import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailtemplateBaseService } from './emailtemplate.base.service';
import { Emailtemplate_SERVER_ROOT_URI } from '../emailtemplate.tokens';

@Injectable()
export class EmailtemplateService extends EmailtemplateBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Emailtemplate_SERVER_ROOT_URI) private emailtemplateServerRootUri: string) {
        super(http, emailtemplateServerRootUri);
    }
    ngOnDestroy() { }
}
