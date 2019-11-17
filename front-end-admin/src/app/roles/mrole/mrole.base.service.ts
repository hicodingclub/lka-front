import { HttpClient } from '@angular/common/http';
import { BaseService } from '@hicoder/angular-core';

const servicePath = '/mrole/';

export class MroleBaseService extends BaseService {
    constructor(http: HttpClient, serverRootUrl: string) {
        const serviceUrl = serverRootUrl + servicePath;
        super(http, serviceUrl);
    }
}
