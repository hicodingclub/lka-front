import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from './emailing.directive';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
import {
  EmailingRoutingCoreModule
} from './emailing-routing.core.module';
import {
  EmailingComponent
} from './emailing.component';
// Import components for each schema
import {
  EmailtemplateComponent
} from './emailtemplate/emailtemplate.component';
import {
  EmailtemplateListComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list.component';
import {
  EmailtemplateListCustComponent
} from '../emailing-cust/base/emailtemplate/emailtemplate-list.cust.component';
import {
  EmailtemplateDetailComponent
} from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';
import {
  EmailtemplateDetailCustComponent
} from '../emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component';
import {
  EmailtemplateDetailFieldComponent
} from './emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component';
import {
  EmailtemplateEditComponent
} from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';
import {
  EmailtemplateEditCustComponent
} from '../emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component';
import {
  EmailsettingsComponent
} from './emailsettings/emailsettings.component';
import {
  EmailsettingsListComponent
} from './emailsettings/emailsettings-list/emailsettings-list.component';
import {
  EmailsettingsListCustComponent
} from '../emailing-cust/base/emailsettings/emailsettings-list.cust.component';
import {
  EmailsettingsDetailComponent
} from './emailsettings/emailsettings-detail/emailsettings-detail.component';
import {
  EmailsettingsDetailCustComponent
} from '../emailing-cust/base/emailsettings/emailsettings-detail.cust.component';
import {
  EmailsettingsDetailFieldComponent
} from './emailsettings/emailsettings-detail/emailsettings-detail-field.component';
import {
  EmailsettingsEditComponent
} from './emailsettings/emailsettings-edit/emailsettings-edit.component';
import {
  EmailsettingsEditCustComponent
} from '../emailing-cust/base/emailsettings/emailsettings-edit.cust.component';
import {
  EmailqueueComponent
} from './emailqueue/emailqueue.component';
import {
  EmailqueueListComponent
} from './emailqueue/emailqueue-list/emailqueue-list.component';
import {
  EmailqueueListCustComponent
} from '../emailing-cust/base/emailqueue/emailqueue-list.cust.component';
import {
  EmailqueueDetailComponent
} from './emailqueue/emailqueue-detail/emailqueue-detail.component';
import {
  EmailqueueDetailCustComponent
} from '../emailing-cust/base/emailqueue/emailqueue-detail.cust.component';
import {
  EmailqueueDetailFieldComponent
} from './emailqueue/emailqueue-detail/emailqueue-detail-field.component';
import {
  EmailqueueEditComponent
} from './emailqueue/emailqueue-edit/emailqueue-edit.component';
import {
  EmailqueueEditCustComponent
} from '../emailing-cust/base/emailqueue/emailqueue-edit.cust.component';
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
    EmailtemplateComponent,
    EmailtemplateListComponent,
    EmailtemplateListCustComponent,
    EmailtemplateDetailCustComponent,
    EmailtemplateDetailComponent,
    EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,
    EmailtemplateEditCustComponent,
    EmailsettingsComponent,
    EmailsettingsListComponent,
    EmailsettingsListCustComponent,
    EmailsettingsDetailCustComponent,
    EmailsettingsDetailComponent,
    EmailsettingsDetailFieldComponent,
    EmailsettingsEditComponent,
    EmailsettingsEditCustComponent,
    EmailqueueComponent,
    EmailqueueListComponent,
    EmailqueueListCustComponent,
    EmailqueueDetailCustComponent,
    EmailqueueDetailComponent,
    EmailqueueDetailFieldComponent,
    EmailqueueEditComponent,
    EmailqueueEditCustComponent,
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
    EmailqueueListComponent,
    EmailqueueDetailComponent,
    EmailqueueDetailFieldComponent,
    EmailqueueEditComponent,
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    EmailtemplateEditComponent,
  ]
})
export class EmailingCoreModule {}