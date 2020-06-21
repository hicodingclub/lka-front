import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './roles.directive';
import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { RolesRoutingCoreModule } from './roles-routing.core.module';
import { RolesComponent } from './roles.component';
import { RolesRefSelectDirective } from './roles.component';

// Import components for each schema
import { MroleListComponent } from './mrole/mrole-list/mrole-list.component';
import { MroleDetailComponent } from './mrole/mrole-detail/mrole-detail.component';
import { MroleDetailFieldComponent } from './mrole/mrole-detail/mrole-detail-field.component';
import { MroleEditComponent } from './mrole/mrole-edit/mrole-edit.component';
import { MmoduleListComponent } from './mmodule/mmodule-list/mmodule-list.component';
import { MmoduleDetailComponent } from './mmodule/mmodule-detail/mmodule-detail.component';
import { MmoduleDetailFieldComponent } from './mmodule/mmodule-detail/mmodule-detail-field.component';
import { MmoduleEditComponent } from './mmodule/mmodule-edit/mmodule-edit.component';
import { MpermissionListComponent } from './mpermission/mpermission-list/mpermission-list.component';
import { MpermissionDetailComponent } from './mpermission/mpermission-detail/mpermission-detail.component';
import { MpermissionDetailFieldComponent } from './mpermission/mpermission-detail/mpermission-detail-field.component';
import { MpermissionEditComponent } from './mpermission/mpermission-edit/mpermission-edit.component';
import { MaccountListComponent } from './maccount/maccount-list/maccount-list.component';
import { MaccountDetailComponent } from './maccount/maccount-detail/maccount-detail.component';
import { MaccountDetailFieldComponent } from './maccount/maccount-detail/maccount-detail-field.component';
import { MaccountEditComponent } from './maccount/maccount-edit/maccount-edit.component';
import { MaccountroleListComponent } from './maccountrole/maccountrole-list/maccountrole-list.component';
import { MaccountroleDetailComponent } from './maccountrole/maccountrole-detail/maccountrole-detail.component';
import { MaccountroleDetailFieldComponent } from './maccountrole/maccountrole-detail/maccountrole-detail-field.component';
import { MaccountroleEditComponent } from './maccountrole/maccountrole-edit/maccountrole-edit.component';
import { MroleListSelectComponent } from './mrole/mrole-list/mrole-list-select.component';
import { MroleDetailPopComponent } from './mrole/mrole-detail/mrole-detail-pop.component';
import { MroleDetailSelComponent } from './mrole/mrole-detail/mrole-detail-sel.component';
import { MmoduleListSelectComponent } from './mmodule/mmodule-list/mmodule-list-select.component';
import { MmoduleDetailPopComponent } from './mmodule/mmodule-detail/mmodule-detail-pop.component';
import { MmoduleDetailSelComponent } from './mmodule/mmodule-detail/mmodule-detail-sel.component';
import { MaccountListSelectComponent } from './maccount/maccount-list/maccount-list-select.component';
import { MaccountDetailPopComponent } from './maccount/maccount-detail/maccount-detail-pop.component';
import { MaccountDetailSelComponent } from './maccount/maccount-detail/maccount-detail-sel.component';
import { MpermissionListSubComponent } from './mpermission/mpermission-list/mpermission-list-sub.component';
import { MpermissionDetailSubComponent } from './mpermission/mpermission-detail/mpermission-detail-sub.component';
import { MaccountroleListSubComponent } from './maccountrole/maccountrole-list/maccountrole-list-sub.component';
import { MaccountroleDetailSubComponent } from './maccountrole/maccountrole-detail/maccountrole-detail-sub.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    ActionEmailModule,
    RolesRoutingCoreModule,
  ],
  declarations: [
    RolesComponent,
    RolesRefSelectDirective,
    MroleListComponent,
    MroleDetailComponent,
    MroleDetailFieldComponent,
    MroleEditComponent,
    MmoduleListComponent,
    MmoduleDetailComponent,
    MmoduleDetailFieldComponent,
    MmoduleEditComponent,
    MpermissionListComponent,
    MpermissionDetailComponent,
    MpermissionDetailFieldComponent,
    MpermissionEditComponent,
    MaccountListComponent,
    MaccountDetailComponent,
    MaccountDetailFieldComponent,
    MaccountEditComponent,
    MaccountroleListComponent,
    MaccountroleDetailComponent,
    MaccountroleDetailFieldComponent,
    MaccountroleEditComponent,
    MroleListSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleListSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MaccountListSelectComponent,
    MaccountDetailPopComponent,
    MaccountDetailSelComponent,
    MpermissionListSubComponent,
    MpermissionDetailSubComponent,
    MaccountroleListSubComponent,
    MaccountroleDetailSubComponent,
  ],
  exports: [
    RolesComponent,
    MroleListComponent,
    MroleDetailComponent,
    MroleDetailFieldComponent,
    MroleEditComponent,
    MmoduleListComponent,
    MmoduleDetailComponent,
    MmoduleDetailFieldComponent,
    MmoduleEditComponent,
    MpermissionListComponent,
    MpermissionDetailComponent,
    MpermissionDetailFieldComponent,
    MpermissionEditComponent,
    MaccountListComponent,
    MaccountDetailComponent,
    MaccountDetailFieldComponent,
    MaccountEditComponent,
    MaccountroleListComponent,
    MaccountroleDetailComponent,
    MaccountroleDetailFieldComponent,
    MaccountroleEditComponent,
    MroleListSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleListSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MaccountListSelectComponent,
    MaccountDetailPopComponent,
    MaccountDetailSelComponent,
    MpermissionListSubComponent,
    MpermissionDetailSubComponent,
    MaccountroleListSubComponent,
    MaccountroleDetailSubComponent,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
    MroleListSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleListSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MaccountListSelectComponent,
    MaccountDetailPopComponent,
    MaccountDetailSelComponent,
    MroleEditComponent,
    MmoduleEditComponent,
    MpermissionEditComponent,
    MaccountEditComponent,
    MaccountroleEditComponent,
  ]
})
export class RolesCoreModule { }
