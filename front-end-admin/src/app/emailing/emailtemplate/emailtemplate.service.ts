import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailtemplateBaseService } from './emailtemplate.base.service';
import { Emailing_SERVER_ROOT_URI } from '../emailing.tokens';

@Injectable()
export class EmailtemplateService extends EmailtemplateBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Emailing_SERVER_ROOT_URI) private emailingServerRootUri: string) {
        super(http, emailingServerRootUri);
    }
    ngOnDestroy() { }
}
