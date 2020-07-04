import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from '../publicinfo/publicinfo.directive';
import { Publicinfo_SERVER_ROOT_URI } from '../publicinfo/publicinfo.tokens';
import { publicinfo_server_root_uri } from './publicinfo.conf';

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
    { provide: Publicinfo_SERVER_ROOT_URI, useValue: publicinfo_server_root_uri },

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
  ],
})
export class PublicinfoExtModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 18:29:33 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from '../publicinfo/publicinfo.directive';

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

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
  ],
})
export class PublicinfoExtModule { }
**** End of recent updates.<<<*/
