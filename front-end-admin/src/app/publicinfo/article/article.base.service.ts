import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const servicePath = '/article/';

export class ArticleBaseService extends BaseService {
    constructor(http: HttpClient, serverRootUrl: string) {
        const serviceUrl = serverRootUrl + servicePath;
        super(http, serviceUrl);
    }
}
