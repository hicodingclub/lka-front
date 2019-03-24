import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





import { MraModule } from 'mean-rest-angular';

import { PublicinfoRoutingModule } from './publicinfo-routing.module';
import { PublicinfoComponent } from './publicinfo.component';


import { Publicinfo_SERVER_ROOT_URI } from './publicinfo.tokens';
import { publicinfo_server_root_uri } from '../publicinfo.conf';

// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';
import { GeneralinfoService } from './generalinfo/generalinfo.service';

import { FaqinfoListComponent } from './faqinfo/faqinfo-list/faqinfo-list.component';
import { FaqinfoDetailComponent } from './faqinfo/faqinfo-detail/faqinfo-detail.component';
import { FaqinfoEditComponent } from './faqinfo/faqinfo-edit/faqinfo-edit.component';
import { FaqinfoService } from './faqinfo/faqinfo.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    MraModule,

    PublicinfoRoutingModule
  ],
  declarations: [
    PublicinfoComponent,
    

    GeneralinfoListComponent,
    GeneralinfoDetailComponent,
    GeneralinfoEditComponent,
    FaqinfoListComponent,
    FaqinfoDetailComponent,
    FaqinfoEditComponent,






  ],
  exports: [
    PublicinfoComponent,

    GeneralinfoListComponent,
    GeneralinfoDetailComponent,
    GeneralinfoEditComponent,
    FaqinfoListComponent,
    FaqinfoDetailComponent,
    FaqinfoEditComponent,


  ],
  providers: [
    { provide: Publicinfo_SERVER_ROOT_URI, useValue: publicinfo_server_root_uri },


    GeneralinfoService,
    FaqinfoService,
  ],

})
export class PublicinfoModule { }
