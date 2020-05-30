import { NgModule } from '@angular/core';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineCoreModule } from './pipeline.core.module';
import { PipelineCustModule } from '../pipeline-cust/pipeline.cust.module'

@NgModule({
  imports: [
    PipelineRoutingModule,
    PipelineCoreModule,
    PipelineCustModule,
  ],
  declarations: [
  ],
  exports: [
    PipelineCoreModule,
    PipelineCustModule,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class PipelineModule { }
