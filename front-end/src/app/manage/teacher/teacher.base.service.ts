import { HttpClient } from '@angular/common/http';
import { BaseService } from 'mean-rest-angular';

const serviceUrl = '/api/manage/teacher/';

export class TeacherBaseService extends BaseService {
    constructor(http: HttpClient) {
        super(http, serviceUrl);
    }    
}
