import { HttpClient } from '@angular/common/http';
import { BaseService } from '@hicoder/angular-core';

const servicePath = '/mpubaccess/';

export class MpubaccessBaseService extends BaseService {
    constructor(http: HttpClient, serverRootUrl: string) {
        const serviceUrl = serverRootUrl + servicePath;
        super(http, serviceUrl);
    }
}
