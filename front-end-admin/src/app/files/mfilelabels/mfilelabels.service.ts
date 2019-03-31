import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MfilelabelsBaseService } from './mfilelabels.base.service';
import { Files_SERVER_ROOT_URI } from '../files.tokens';

@Injectable()
export class MfilelabelsService extends MfilelabelsBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Files_SERVER_ROOT_URI) private filesServerRootUri: string) {
        super(http, filesServerRootUri);
    }
    ngOnDestroy() { }
}
