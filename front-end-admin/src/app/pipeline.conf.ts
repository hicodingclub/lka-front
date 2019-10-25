import { Routes } from '@angular/router';

import { PipelineComponent } from './pipeline/pipeline.component';

//Import routing paths
import { pipelineRoutingPath,  } from './pipeline/pipeline-routing.path';

export const PipelineRoutes: Routes = [
  { path: 'pipeline', 
    component: PipelineComponent,
    children: [ 
      {path: '',  redirectTo: 'pipeline', pathMatch: 'full'},

      { path: "pipeline",
        children: pipelineRoutingPath, 
        data: {"mraLevel": 1, "item": "pipeline"}
      },
    ]
  }
];

export const pipeline_server_root_uri:string = "/api/pipeline";/*>>> Please check this recent updates and merge with existing ones***
**Date: Tue Oct 15 2019 09:24:59 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { PipelineComponent } from './pipeline/pipeline.component';

//Import routing paths
import { pipelineRoutingPath,  } from './pipeline/pipeline-routing.path';

export const PipelineRoutes: Routes = [
  { path: 'pipeline',
    component: PipelineComponent,
    children: [
      {path: '',  redirectTo: 'pipeline', pathMatch: 'full'},

      { path: "pipeline",
        children: pipelineRoutingPath,
        data: {"mraLevel": 1, "item": "pipeline"}
      },
    ]
  }
];

export const pipeline_server_root_uri:string = "/api/pipeline";**** End of recent updates.<<<*/
