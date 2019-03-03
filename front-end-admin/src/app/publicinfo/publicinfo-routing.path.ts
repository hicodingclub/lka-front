// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';



import { AuthGuard } from 'mdds-angular-auth';




export const generalinfoRoutingPath = [
    {path: 'list', component: GeneralinfoListComponent},
    {path: 'detail/:id', component: GeneralinfoDetailComponent},
    {path: 'edit/:id', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
