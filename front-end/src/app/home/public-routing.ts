import { ClassDetailComponent } from '../academics/class/class-detail/class-detail.component';
import { EventDetailComponent } from '../publicinfo/event/event-detail/event-detail.component';

export const publicRoutingPath = [
     {path: 'class/:id', component: ClassDetailComponent},
     {path: 'event/:id', component: EventDetailComponent},
];
