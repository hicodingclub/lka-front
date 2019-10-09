// Import components for each schema

import { EmailtemplateListComponent } from './emailtemplate/emailtemplate-list/emailtemplate-list.component';
import { EmailtemplateDetailComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';
import { EmailtemplateEditComponent } from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';



import { AuthGuard } from 'mdds-angular-auth';




export const emailtemplateRoutingPath = [
    {path: 'list', component: EmailtemplateListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: EmailtemplateDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EmailtemplateEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EmailtemplateEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
