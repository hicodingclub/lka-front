// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';


import { FaqinfoListComponent } from './faqinfo/faqinfo-list/faqinfo-list.component';
import { FaqinfoDetailComponent } from './faqinfo/faqinfo-detail/faqinfo-detail.component';
import { FaqinfoEditComponent } from './faqinfo/faqinfo-edit/faqinfo-edit.component';


import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';



import { AuthGuard } from 'mdds-angular-auth';




export const generalinfoRoutingPath = [
    {path: 'list', component: GeneralinfoListComponent},
    {path: 'detail/:id', component: GeneralinfoDetailComponent},
    {path: 'edit/:id', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const faqinfoRoutingPath = [
    {path: 'list', component: FaqinfoListComponent},
    {path: 'detail/:id', component: FaqinfoDetailComponent},
    {path: 'edit/:id', component: FaqinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: FaqinfoEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const eventRoutingPath = [
    {path: 'list', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    {path: 'edit/:id', component: EventEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EventEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
