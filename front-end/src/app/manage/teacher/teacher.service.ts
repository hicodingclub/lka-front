import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherBaseService } from './teacher.base.service';
 
@Injectable(
)
export class TeacherService extends TeacherBaseService implements OnDestroy {    
    constructor(http: HttpClient) {
        super(http);
    }
    ngOnDestroy() { }
}
