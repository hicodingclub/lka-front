import { Routes } from '@angular/router';

import { PipelineComponent } from '../pipeline/pipeline.component';

//Import routing paths
import { 
  pipelineRoutingCorePath,  
} from '../pipeline/pipeline-routing.core.path';

export const PipelineCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'pipeline', loadChildren: () => import('./pipeline/pipeline.module').then(m => m.PipelineModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'pipeline',

    component: PipelineComponent,
    children: [
      {path: '',  redirectTo: 'pipeline', pathMatch: 'full'},

      { path: 'pipeline',
        children: pipelineRoutingCorePath,
        data: {mraLevel: 1, item: 'pipeline'}
      },
    ]
  },
];

import { PipelineRoutingCustPath } from './pipeline-routing.cust.path';

export const PipelineRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'pipeline', loadChildren: () => import('./pipeline/pipeline.module').then(m => m.PipelineModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'pipeline/cust',

    children: PipelineRoutingCustPath,
  },
];

export const pipeline_server_root_uri: string = '/api/pipeline';
