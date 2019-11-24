// Import components for each schema

import { MuserListComponent } from './muser/muser-list/muser-list.component';
import { MuserDetailComponent } from './muser/muser-detail/muser-detail.component';
import { MuserEditComponent } from './muser/muser-edit/muser-edit.component';
import { MuserPassComponent } from './muser/muser-edit/muser-pass.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const muserRoutingPath = [
    {path: 'list', component: MuserListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MuserDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MuserEditComponent, canActivate: [AuthGuard]},
    {path: 'password/:id', component: MuserPassComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MuserEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

