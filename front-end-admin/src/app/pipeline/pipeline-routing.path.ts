// Import components for each schema

import { PipelineListComponent } from './pipeline/pipeline-list/pipeline-list.component';
import { PipelineDetailComponent } from './pipeline/pipeline-detail/pipeline-detail.component';

import { PipelineEditComponent } from './pipeline/pipeline-edit/pipeline-edit.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const pipelineRoutingPath = [
    {path: 'list', component: PipelineListComponent},
     {path: 'detail/:id', component: PipelineDetailComponent},
    {path: 'edit/:id', component: PipelineEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: PipelineEditComponent},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

