import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicinfoCoreModule } from '../publicinfo/publicinfo.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    PublicinfoCoreModule,
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
export class PublicinfoCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 18:29:33 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PublicinfoCoreModule } from '../publicinfo/publicinfo.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PublicinfoCoreModule,
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
export class PublicinfoCustModule { }
**** End of recent updates.<<<*/
