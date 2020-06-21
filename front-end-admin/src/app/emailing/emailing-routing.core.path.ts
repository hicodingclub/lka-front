// Import components for each schema

import { EmailtemplateListComponent } from './emailtemplate/emailtemplate-list/emailtemplate-list.component';

import { EmailtemplateDetailComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';

import { EmailtemplateEditComponent } from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';


import { EmailsettingsListComponent } from './emailsettings/emailsettings-list/emailsettings-list.component';

import { EmailsettingsDetailComponent } from './emailsettings/emailsettings-detail/emailsettings-detail.component';

import { EmailsettingsEditComponent } from './emailsettings/emailsettings-edit/emailsettings-edit.component';


import { EmailqueueListComponent } from './emailqueue/emailqueue-list/emailqueue-list.component';

import { EmailqueueDetailComponent } from './emailqueue/emailqueue-detail/emailqueue-detail.component';

import { EmailqueueEditComponent } from './emailqueue/emailqueue-edit/emailqueue-edit.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const emailtemplateRoutingCorePath = [
    {path: 'list', component: EmailtemplateListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: EmailtemplateDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EmailtemplateEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EmailtemplateEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const emailsettingsRoutingCorePath = [
    {path: 'list', component: EmailsettingsListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: EmailsettingsDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EmailsettingsEditComponent, canActivate: [AuthGuard]},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const emailqueueRoutingCorePath = [
    {path: 'list', component: EmailqueueListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: EmailqueueDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EmailqueueEditComponent, canActivate: [AuthGuard]},
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

