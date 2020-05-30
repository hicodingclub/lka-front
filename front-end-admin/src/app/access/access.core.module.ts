import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';







import { MddsCoreModule } from '@hicoder/angular-core';

import { AccessRoutingCoreModule } from './access-routing.core.module';
import { AccessComponent } from './access.component';
import { AccessRefSelectDirective } from './access.component';

import { Access_SERVER_ROOT_URI } from './access.tokens';
import { access_server_root_uri } from '../access-cust/access.conf';

// Import components for each schema

import { MusergroupListComponent } from './musergroup/musergroup-list/musergroup-list.component';

import { MusergroupDetailComponent } from './musergroup/musergroup-detail/musergroup-detail.component';

import { MusergroupDetailFieldComponent } from './musergroup/musergroup-detail/musergroup-detail-field.component';
import { MusergroupEditComponent } from './musergroup/musergroup-edit/musergroup-edit.component';

import { MusergroupService } from './musergroup/musergroup.service';

import { MpubmoduleListComponent } from './mpubmodule/mpubmodule-list/mpubmodule-list.component';

import { MpubmoduleDetailComponent } from './mpubmodule/mpubmodule-detail/mpubmodule-detail.component';

import { MpubmoduleDetailFieldComponent } from './mpubmodule/mpubmodule-detail/mpubmodule-detail-field.component';
import { MpubmoduleEditComponent } from './mpubmodule/mpubmodule-edit/mpubmodule-edit.component';

import { MpubmoduleService } from './mpubmodule/mpubmodule.service';

import { MpubaccessListComponent } from './mpubaccess/mpubaccess-list/mpubaccess-list.component';

import { MpubaccessDetailComponent } from './mpubaccess/mpubaccess-detail/mpubaccess-detail.component';

import { MpubaccessDetailFieldComponent } from './mpubaccess/mpubaccess-detail/mpubaccess-detail-field.component';
import { MpubaccessEditComponent } from './mpubaccess/mpubaccess-edit/mpubaccess-edit.component';

import { MpubaccessService } from './mpubaccess/mpubaccess.service';


import { MusergroupListSelectComponent } from './musergroup/musergroup-list/musergroup-list-select.component';

import { MusergroupDetailPopComponent } from './musergroup/musergroup-detail/musergroup-detail-pop.component';
import { MusergroupDetailSelComponent } from './musergroup/musergroup-detail/musergroup-detail-sel.component';
import { MpubmoduleListSelectComponent } from './mpubmodule/mpubmodule-list/mpubmodule-list-select.component';

import { MpubmoduleDetailPopComponent } from './mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import { MpubmoduleDetailSelComponent } from './mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';

import { MpubaccessListSubComponent } from './mpubaccess/mpubaccess-list/mpubaccess-list-sub.component';
import { MpubaccessDetailSubComponent } from './mpubaccess/mpubaccess-detail/mpubaccess-detail-sub.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,

    AccessRoutingCoreModule,
  ],
  declarations: [
    AccessComponent,
    AccessRefSelectDirective,

    MusergroupListComponent,

    MusergroupDetailComponent,

    MusergroupDetailFieldComponent,
    MusergroupEditComponent,

    MpubmoduleListComponent,

    MpubmoduleDetailComponent,

    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,

    MpubaccessListComponent,

    MpubaccessDetailComponent,

    MpubaccessDetailFieldComponent,
    MpubaccessEditComponent,


    MusergroupListSelectComponent,
    
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleListSelectComponent,
    
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,

    MpubaccessListSubComponent,
    MpubaccessDetailSubComponent,




  ],
  exports: [
    AccessComponent,

    MusergroupListComponent,

    MusergroupDetailComponent,

    MusergroupDetailFieldComponent,
    MusergroupEditComponent,

    MpubmoduleListComponent,

    MpubmoduleDetailComponent,

    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,

    MpubaccessListComponent,

    MpubaccessDetailComponent,

    MpubaccessDetailFieldComponent,
    MpubaccessEditComponent,


    MusergroupListSelectComponent,
    
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleListSelectComponent,
    
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,

    MpubaccessListSubComponent,
    MpubaccessDetailSubComponent,




  ],
  providers: [
    { provide: Access_SERVER_ROOT_URI, useValue: access_server_root_uri },


    MusergroupService,
    MpubmoduleService,
    MpubaccessService,
  ],
  entryComponents: [
    MusergroupListSelectComponent,
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MusergroupEditComponent,
    MpubmoduleEditComponent,
    MpubaccessEditComponent,
  ]
})
export class AccessCoreModule { }
