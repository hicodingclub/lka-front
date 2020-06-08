import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipelineComponent } from './pipeline.component';
import { PipelineCoreRoutes } from '../pipeline-cust/pipeline.conf';

@NgModule({
  imports: [RouterModule.forChild(PipelineCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class PipelineRoutingCoreModule { }
