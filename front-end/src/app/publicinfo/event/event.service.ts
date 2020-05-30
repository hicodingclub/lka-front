import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventBaseService } from './event.base.service';
import { Publicinfo_SERVER_ROOT_URI } from '../publicinfo.tokens';

@Injectable()
export class EventService extends EventBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Publicinfo_SERVER_ROOT_URI) private publicinfoServerRootUri: string) {
        super(http, publicinfoServerRootUri);
    }
    ngOnDestroy() { }
}
