// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';


import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';


import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';


import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';
import { KeynoteEditComponent } from './keynote/keynote-edit/keynote-edit.component';


import { TermsListComponent } from './terms/terms-list/terms-list.component';
import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';
import { TermsEditComponent } from './terms/terms-edit/terms-edit.component';



import { AuthGuard } from 'mdds-angular-auth';




export const generalinfoRoutingPath = [
    {path: 'list', component: GeneralinfoListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: GeneralinfoDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const faqRoutingPath = [
    {path: 'list', component: FaqListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: FaqDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: FaqEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: FaqEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const eventRoutingPath = [
    {path: 'list', component: EventListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: EventDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EventEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EventEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const keynoteRoutingPath = [
    {path: 'list', component: KeynoteListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: KeynoteDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: KeynoteEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: KeynoteEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const termsRoutingPath = [
    {path: 'list', component: TermsListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: TermsDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: TermsEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: TermsEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
