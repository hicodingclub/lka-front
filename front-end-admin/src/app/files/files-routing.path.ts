// Import components for each schema

import { MfileListComponent } from './mfile/mfile-list/mfile-list.component';

import { MfileEditComponent } from './mfile/mfile-edit/mfile-edit.component';


import { MfilelabelsListComponent } from './mfilelabels/mfilelabels-list/mfilelabels-list.component';





import { AuthGuard } from 'mdds-angular-auth';




export const mfileRoutingPath = [
    {path: 'list', component: MfileListComponent, canActivate: [AuthGuard]},
    
    {path: 'edit/:id', component: MfileEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const mfilelabelsRoutingPath = [
    {path: 'list', component: MfilelabelsListComponent, canActivate: [AuthGuard]},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
