import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './pipeline.directive';






import { MddsCoreModule } from '@hicoder/angular-core';

import { PipelineRoutingCoreModule } from './pipeline-routing.core.module';
import { PipelineComponent } from './pipeline.component';



// Import components for each schema

import { PipelineListComponent } from './pipeline/pipeline-list/pipeline-list.component';

import { PipelineDetailComponent } from './pipeline/pipeline-detail/pipeline-detail.component';

import { PipelineDetailFieldComponent } from './pipeline/pipeline-detail/pipeline-detail-field.component';
import { PipelineEditComponent } from './pipeline/pipeline-edit/pipeline-edit.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,


    PipelineRoutingCoreModule,
  ],
  declarations: [
    PipelineComponent,
    

    PipelineListComponent,

    PipelineDetailComponent,

    PipelineDetailFieldComponent,
    PipelineEditComponent,







  ],
  exports: [
    PipelineComponent,

    PipelineListComponent,

    PipelineDetailComponent,

    PipelineDetailFieldComponent,
    PipelineEditComponent,







  ],
  providers: [

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
    PipelineEditComponent,
  ]
})
export class PipelineCoreModule { }
