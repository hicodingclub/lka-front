import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { PipelineComponent } from './pipeline.component';
import { PipelineCoreRoutes } from '../pipeline-cust/pipeline.conf';

@NgModule({
  imports: [RouterModule.forChild(PipelineCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class PipelineRoutingCoreModule { }
