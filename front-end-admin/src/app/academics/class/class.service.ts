import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassBaseService } from './class.base.service';
import { Academics_SERVER_ROOT_URI } from '../academics.tokens';

@Injectable({
    providedIn: 'root',
})
export class ClassService extends ClassBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Academics_SERVER_ROOT_URI) private academicsServerRootUri: string) {
        super(http, academicsServerRootUri);
    }
    ngOnDestroy() { }
}
