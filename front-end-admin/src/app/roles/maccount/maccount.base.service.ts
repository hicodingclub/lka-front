import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const servicePath = '/maccount/';

export class MaccountBaseService extends BaseService {
    constructor(http: HttpClient, serverRootUrl: string) {
        const serviceUrl = serverRootUrl + servicePath;
        super(http, serviceUrl);
    }
}
