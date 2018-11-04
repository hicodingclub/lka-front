import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const serviceUrl = '/api/manage/student/';

export class StudentBaseService extends BaseService {
    constructor(http: HttpClient) {
        super(http, serviceUrl);
    }    
}
