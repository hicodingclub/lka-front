import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventBaseService } from './event.base.service';
 
@Injectable(
)
export class EventService extends EventBaseService implements OnDestroy {    
    constructor(http: HttpClient) {
        super(http);
    }
    ngOnDestroy() { }
}
