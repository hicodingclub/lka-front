import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PipelineBaseService } from './pipeline.base.service';
import { Pipeline_SERVER_ROOT_URI } from '../pipeline.tokens';

@Injectable({
    providedIn: 'root',
})
export class PipelineService extends PipelineBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Pipeline_SERVER_ROOT_URI) private pipelineServerRootUri: string) {
        super(http, pipelineServerRootUri);
    }
    ngOnDestroy() { }
}
