import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const serviceUrl = '/api/manage/event/';

export class EventBaseService extends BaseService {
    constructor(http: HttpClient) {
        super(http, serviceUrl);
    }    
}