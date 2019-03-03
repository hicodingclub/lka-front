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
import { GeneralinfoService } from './generalinfo/generalinfo.service';





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






  ],
  exports: [
    PublicinfoComponent,

    GeneralinfoListComponent,
    GeneralinfoDetailComponent,


  ],
  providers: [
    { provide: Publicinfo_SERVER_ROOT_URI, useValue: publicinfo_server_root_uri },


    GeneralinfoService,
  ],

})
export class PublicinfoModule { }
