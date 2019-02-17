import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './roles.directive';



import { MraModule } from 'mean-rest-angular';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesRefSelectDirective } from './roles.component';

import { Roles_SERVER_ROOT_URI } from './roles.tokens';
import { roles_server_root_uri } from '../roles.conf';

// Import components for each schema

import { MroleListComponent } from './mrole/mrole-list/mrole-list.component';
import { MroleDetailComponent } from './mrole/mrole-detail/mrole-detail.component';
import { MroleEditComponent } from './mrole/mrole-edit/mrole-edit.component';
import { MroleService } from './mrole/mrole.service';

import { MmoduleListComponent } from './mmodule/mmodule-list/mmodule-list.component';
import { MmoduleDetailComponent } from './mmodule/mmodule-detail/mmodule-detail.component';
import { MmoduleEditComponent } from './mmodule/mmodule-edit/mmodule-edit.component';
import { MmoduleService } from './mmodule/mmodule.service';

import { MpermissionListComponent } from './mpermission/mpermission-list/mpermission-list.component';
import { MpermissionDetailComponent } from './mpermission/mpermission-detail/mpermission-detail.component';
import { MpermissionEditComponent } from './mpermission/mpermission-edit/mpermission-edit.component';
import { MpermissionService } from './mpermission/mpermission.service';

import { MuserListComponent } from './muser/muser-list/muser-list.component';
import { MuserDetailComponent } from './muser/muser-detail/muser-detail.component';
import { MuserEditComponent } from './muser/muser-edit/muser-edit.component';
import { MuserService } from './muser/muser.service';

import { MuserroleListComponent } from './muserrole/muserrole-list/muserrole-list.component';
import { MuserroleDetailComponent } from './muserrole/muserrole-detail/muserrole-detail.component';
import { MuserroleEditComponent } from './muserrole/muserrole-edit/muserrole-edit.component';
import { MuserroleService } from './muserrole/muserrole.service';


import { MroleSelectComponent } from './mrole/mrole-list/mrole-select.component';
import { MroleDetailPopComponent } from './mrole/mrole-detail/mrole-detail-pop.component';
import { MroleDetailSelComponent } from './mrole/mrole-detail/mrole-detail-sel.component';
import { MmoduleSelectComponent } from './mmodule/mmodule-list/mmodule-select.component';
import { MmoduleDetailPopComponent } from './mmodule/mmodule-detail/mmodule-detail-pop.component';
import { MmoduleDetailSelComponent } from './mmodule/mmodule-detail/mmodule-detail-sel.component';
import { MuserSelectComponent } from './muser/muser-list/muser-select.component';
import { MuserDetailPopComponent } from './muser/muser-detail/muser-detail-pop.component';
import { MuserDetailSelComponent } from './muser/muser-detail/muser-detail-sel.component';

import { MpermissionListSubComponent } from './mpermission/mpermission-list/mpermission-list-sub.component';
import { MpermissionDetailSubComponent } from './mpermission/mpermission-detail/mpermission-detail-sub.component';
import { MuserroleListSubComponent } from './muserrole/muserrole-list/muserrole-list-sub.component';
import { MuserroleDetailSubComponent } from './muserrole/muserrole-detail/muserrole-detail-sub.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    NgbModule,
    MraModule,

    RolesRoutingModule
  ],
  declarations: [
    RolesComponent,
    RolesRefSelectDirective,

    MroleListComponent,
    MroleDetailComponent,
    MroleEditComponent,
    MmoduleListComponent,
    MmoduleDetailComponent,
    MmoduleEditComponent,
    MpermissionListComponent,
    MpermissionDetailComponent,
    MpermissionEditComponent,
    MuserListComponent,
    MuserDetailComponent,
    MuserEditComponent,
    MuserroleListComponent,
    MuserroleDetailComponent,
    MuserroleEditComponent,

    MroleSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MuserSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,

    MpermissionListSubComponent,
    MpermissionDetailSubComponent,
    MuserroleListSubComponent,
    MuserroleDetailSubComponent,



  ],
  exports: [
    RolesComponent,

    MroleListComponent,
    MroleDetailComponent,
    MroleEditComponent,
    MmoduleListComponent,
    MmoduleDetailComponent,
    MmoduleEditComponent,
    MpermissionListComponent,
    MpermissionDetailComponent,
    MpermissionEditComponent,
    MuserListComponent,
    MuserDetailComponent,
    MuserEditComponent,
    MuserroleListComponent,
    MuserroleDetailComponent,
    MuserroleEditComponent,

    MroleSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MuserSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,

    MpermissionListSubComponent,
    MpermissionDetailSubComponent,
    MuserroleListSubComponent,
    MuserroleDetailSubComponent,
  ],
  providers: [
    { provide: Roles_SERVER_ROOT_URI, useValue: roles_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    MroleService,
    MmoduleService,
    MpermissionService,
    MuserService,
    MuserroleService,
  ],

  entryComponents: [

    MroleSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MuserSelectComponent,
    MuserDetailPopComponent,
    MuserDetailSelComponent,
  ]
})
export class RolesModule { }
