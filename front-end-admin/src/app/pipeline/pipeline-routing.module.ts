import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { PipelineRoutes } from '../pipeline-cust/pipeline.conf';

@NgModule({
  imports: [RouterModule.forChild(PipelineRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class PipelineRoutingModule { }
