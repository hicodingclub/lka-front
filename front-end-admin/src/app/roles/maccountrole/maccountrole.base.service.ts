import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const servicePath = '/maccountrole/';

export class MaccountroleBaseService extends BaseService {
    constructor(http: HttpClient, serverRootUrl: string) {
        const serviceUrl = serverRootUrl + servicePath;
        super(http, serviceUrl);
    }
}
