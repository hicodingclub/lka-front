import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RolesCoreModule } from '../roles/roles.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    RolesCoreModule,
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
export class RolesCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 24 2020 11:50:07 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RolesCoreModule } from '../roles/roles.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    RolesCoreModule,
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
export class RolesCustModule { }
**** End of recent updates.<<<*/
