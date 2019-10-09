import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';






import { MraModule } from 'mean-rest-angular';

import { EmailtemplateRoutingModule } from './emailtemplate-routing.module';
import { EmailtemplateComponent } from './emailtemplate.component';


import { Emailtemplate_SERVER_ROOT_URI } from './emailtemplate.tokens';
import { emailtemplate_server_root_uri } from '../emailtemplate.conf';

// Import components for each schema

import { EmailtemplateListComponent } from './emailtemplate/emailtemplate-list/emailtemplate-list.component';



import { EmailtemplateDetailComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';
import { EmailtemplateDetailFieldComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component';
import { EmailtemplateEditComponent } from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';

import { EmailtemplateService } from './emailtemplate/emailtemplate.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MraModule,

    EmailtemplateRoutingModule
  ],
  declarations: [
    EmailtemplateComponent,
    

    EmailtemplateListComponent,
    
    
    
    EmailtemplateDetailComponent,
EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,







  ],
  exports: [
    EmailtemplateComponent,

    EmailtemplateListComponent,
    
    
    
    EmailtemplateDetailComponent,
EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,



  ],
  providers: [
    { provide: Emailtemplate_SERVER_ROOT_URI, useValue: emailtemplate_server_root_uri },


    EmailtemplateService,
  ],
  entryComponents: [EmailtemplateEditComponent,
  ]
})
export class EmailtemplateModule { }
