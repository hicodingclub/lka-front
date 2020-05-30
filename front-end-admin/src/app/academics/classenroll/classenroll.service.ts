import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassenrollBaseService } from './classenroll.base.service';
import { Academics_SERVER_ROOT_URI } from '../academics.tokens';

@Injectable()
export class ClassenrollService extends ClassenrollBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Academics_SERVER_ROOT_URI) private academicsServerRootUri: string) {
        super(http, academicsServerRootUri);
    }
    ngOnDestroy() { }
}
