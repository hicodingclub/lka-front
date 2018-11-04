import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const serviceUrl = '/api/manage/course/';

export class CourseBaseService extends BaseService {
    constructor(http: HttpClient) {
        super(http, serviceUrl);
    }    
}
