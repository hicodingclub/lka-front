import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './pipeline.directive';





import { MraModule } from 'mean-rest-angular';

import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline.component';


import { Pipeline_SERVER_ROOT_URI } from './pipeline.tokens';
import { pipeline_server_root_uri } from '../pipeline.conf';

// Import components for each schema

import { PipelineListComponent } from './pipeline/pipeline-list/pipeline-list.component';



import { PipelineDetailComponent } from './pipeline/pipeline-detail/pipeline-detail.component';
import { PipelineEditComponent } from './pipeline/pipeline-edit/pipeline-edit.component';

import { PipelineService } from './pipeline/pipeline.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MraModule,

    PipelineRoutingModule
  ],
  declarations: [
    PipelineComponent,
    

    PipelineListComponent,
    
    
    
    PipelineDetailComponent,
    PipelineEditComponent,







  ],
  exports: [
    PipelineComponent,

    PipelineListComponent,
    
    
    
    PipelineDetailComponent,
    PipelineEditComponent,



  ],
  providers: [
    { provide: Pipeline_SERVER_ROOT_URI, useValue: pipeline_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    PipelineService,
  ],
  entryComponents: [PipelineEditComponent,
  ]
})
export class PipelineModule { }
