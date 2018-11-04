import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentBaseService } from './student.base.service';
 
@Injectable(
)
export class StudentService extends StudentBaseService implements OnDestroy {    
    constructor(http: HttpClient) {
        super(http);
    }
    ngOnDestroy() { }
}
