import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventBaseService } from './event.base.service';
import { Manage_SERVER_ROOT_URI } from '../manage.tokens';

@Injectable()
export class EventService extends EventBaseService implements OnDestroy {    
    constructor(
        http: HttpClient,
        @Inject(Manage_SERVER_ROOT_URI) private manageServerRootUri: string) {
        super(http, manageServerRootUri);
    }
    ngOnDestroy() { }
}
