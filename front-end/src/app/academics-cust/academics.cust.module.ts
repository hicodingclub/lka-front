import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AcademicsCoreModule } from '../academics/academics.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    AcademicsCoreModule,
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
export class AcademicsCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Jun 27 2020 12:17:08 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AcademicsCoreModule } from '../academics/academics.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    AcademicsCoreModule,
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
export class AcademicsCustModule { }
**** End of recent updates.<<<*/
