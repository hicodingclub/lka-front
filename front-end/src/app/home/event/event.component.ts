import { Component } from '@angular/core';
import { EventService } from '../../academics/event/event.service';

@Component({
  selector: 'home-event-component',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
    private events;
    constructor(protected eventService: EventService) {
        const result = this.eventService.getList(1,25,{}).subscribe(
           result => { 
              this.events = result.items;
              for (let event of this.events) {
  			  		const utcDate = event.publishDate;
  					const localDate = new Date(utcDate);
  					event.publishDate = localDate;
  				}
           },
        );
    }
}
