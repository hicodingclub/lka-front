import { ClassDetailComponent } from '../manage/class/class-detail/class-detail.component';
import { EventDetailComponent } from '../manage/event/event-detail/event-detail.component';

export const publicRoutingPath = [
     {path: 'class/:id', component: ClassDetailComponent},
     {path: 'event/:id', component: EventDetailComponent},
];