// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';



import { FaqListComponent } from './faq/faq-list/faq-list.component';




import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';



import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';



import { TermsListComponent } from './terms/terms-list/terms-list.component';
import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';




import { AuthGuard } from 'mdds-angular-auth';




export const generalinfoRoutingPath = [
    {path: 'list', component: GeneralinfoListComponent},
    {path: 'detail/:id', component: GeneralinfoDetailComponent},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
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
    {path: 'list', component: KeynoteListComponent},
    {path: 'detail/:id', component: KeynoteDetailComponent},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const termsRoutingPath = [
    {path: 'list', component: TermsListComponent},
    {path: 'detail/:id', component: TermsDetailComponent},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
