import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './emailing.directive';






import { MddsCoreModule } from '@hicoder/angular-core';

import { EmailingRoutingCoreModule } from './emailing-routing.core.module';
import { EmailingComponent } from './emailing.component';


import { Emailing_SERVER_ROOT_URI } from './emailing.tokens';
import { emailing_server_root_uri } from '../emailing-cust/emailing.conf';

// Import components for each schema

import { EmailtemplateListComponent } from './emailtemplate/emailtemplate-list/emailtemplate-list.component';

import { EmailtemplateDetailComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';

import { EmailtemplateDetailFieldComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component';
import { EmailtemplateEditComponent } from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';

import { EmailtemplateService } from './emailtemplate/emailtemplate.service';

import { EmailsettingsListComponent } from './emailsettings/emailsettings-list/emailsettings-list.component';

import { EmailsettingsDetailComponent } from './emailsettings/emailsettings-detail/emailsettings-detail.component';

import { EmailsettingsDetailFieldComponent } from './emailsettings/emailsettings-detail/emailsettings-detail-field.component';
import { EmailsettingsEditComponent } from './emailsettings/emailsettings-edit/emailsettings-edit.component';

import { EmailsettingsService } from './emailsettings/emailsettings.service';

import { EmaillogListComponent } from './emaillog/emaillog-list/emaillog-list.component';

import { EmaillogDetailComponent } from './emaillog/emaillog-detail/emaillog-detail.component';

import { EmaillogDetailFieldComponent } from './emaillog/emaillog-detail/emaillog-detail-field.component';


import { EmaillogService } from './emaillog/emaillog.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,

    EmailingRoutingCoreModule,
  ],
  declarations: [
    EmailingComponent,
    

    EmailtemplateListComponent,

    EmailtemplateDetailComponent,

    EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,

    EmailsettingsListComponent,

    EmailsettingsDetailComponent,

    EmailsettingsDetailFieldComponent,
    EmailsettingsEditComponent,

    EmaillogListComponent,

    EmaillogDetailComponent,

    EmaillogDetailFieldComponent,
    







  ],
  exports: [
    EmailingComponent,

    EmailtemplateListComponent,

    EmailtemplateDetailComponent,

    EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,

    EmailsettingsListComponent,

    EmailsettingsDetailComponent,

    EmailsettingsDetailFieldComponent,
    EmailsettingsEditComponent,

    EmaillogListComponent,

    EmaillogDetailComponent,

    EmaillogDetailFieldComponent,
    







  ],
  providers: [
    { provide: Emailing_SERVER_ROOT_URI, useValue: emailing_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    EmailtemplateService,
    EmailsettingsService,
    EmaillogService,
  ],
  entryComponents: [
    EmailtemplateEditComponent,
  ]
})
export class EmailingCoreModule { }
