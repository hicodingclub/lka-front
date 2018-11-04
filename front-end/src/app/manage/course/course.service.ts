import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseBaseService } from './course.base.service';
 
@Injectable(
)
export class CourseService extends CourseBaseService implements OnDestroy {    
    constructor(http: HttpClient) {
        super(http);
    }
    ngOnDestroy() { }
}
