import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipelineCoreModule } from '../pipeline/pipeline.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    PipelineCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class PipelineCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Jun 08 2020 11:31:27 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipelineCoreModule } from '../pipeline/pipeline.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PipelineCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class PipelineCustModule { }
**** End of recent updates.<<<*/
