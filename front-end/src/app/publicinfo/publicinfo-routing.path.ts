// Import components for each schema


import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';



import { FaqListComponent } from './faq/faq-list/faq-list.component';




import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';




import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';




import { AuthGuard } from 'mdds-angular-auth';




export const generalinfoRoutingPath = [
    
    {path: 'detail/:id', component: GeneralinfoDetailComponent},
    
    
    
];

export const faqRoutingPath = [
    {path: 'list', component: FaqListComponent},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const eventRoutingPath = [
    {path: 'list', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const keynoteRoutingPath = [
    
    {path: 'detail/:id', component: KeynoteDetailComponent},
    
    
    
];
