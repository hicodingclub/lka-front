import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from '../roles/roles.directive';
import { Roles_SERVER_ROOT_URI } from '../roles/roles.tokens';
import { roles_server_root_uri } from './roles.conf';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    

    NgbModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    { provide: Roles_SERVER_ROOT_URI, useValue: roles_server_root_uri },

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
  ],
})
export class RolesExtModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Tue Jul 07 2020 10:25:06 GMT-0700 (Pacific Daylight Time)

import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';
import {
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from '../roles/roles.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [],
  exports: [],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [],
})
export class RolesExtModule {}**** End of recent updates.<<<*/
