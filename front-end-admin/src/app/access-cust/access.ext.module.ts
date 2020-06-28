import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { Access_SERVER_ROOT_URI } from '../access/access.tokens';
import { access_server_root_uri } from './access.conf';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    

  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    { provide: Access_SERVER_ROOT_URI, useValue: access_server_root_uri },

  ],
  entryComponents: [
  ],
})
export class AccessExtModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jun 28 2020 13:27:06 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    

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
export class AccessExtModule { }
**** End of recent updates.<<<*/
