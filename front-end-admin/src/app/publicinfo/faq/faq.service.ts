import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaqBaseService } from './faq.base.service';
import { Publicinfo_SERVER_ROOT_URI } from '../publicinfo.tokens';

@Injectable()
export class FaqService extends FaqBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Publicinfo_SERVER_ROOT_URI) private publicinfoServerRootUri: string) {
        super(http, publicinfoServerRootUri);
    }
    ngOnDestroy() { }
}
