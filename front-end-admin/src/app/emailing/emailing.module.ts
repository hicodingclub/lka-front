import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './emailing.directive';





import { MraModule } from 'mean-rest-angular';

import { EmailingRoutingModule } from './emailing-routing.module';
import { EmailingComponent } from './emailing.component';


import { Emailing_SERVER_ROOT_URI } from './emailing.tokens';
import { emailing_server_root_uri } from '../emailing.conf';

// Import components for each schema

import { EmailtemplateListComponent } from './emailtemplate/emailtemplate-list/emailtemplate-list.component';



import { EmailtemplateDetailComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';
import { EmailtemplateDetailFieldComponent } from './emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component';
import { EmailtemplateEditComponent } from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';

import { EmailtemplateService } from './emailtemplate/emailtemplate.service';

import { EmaillogListComponent } from './emaillog/emaillog-list/emaillog-list.component';



import { EmaillogDetailComponent } from './emaillog/emaillog-detail/emaillog-detail.component';
import { EmaillogDetailFieldComponent } from './emaillog/emaillog-detail/emaillog-detail-field.component';


import { EmaillogService } from './emaillog/emaillog.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MraModule,

    EmailingRoutingModule
  ],
  declarations: [
    EmailingComponent,
    

    EmailtemplateListComponent,
    
    
    
    EmailtemplateDetailComponent,
EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,

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

    EmaillogListComponent,
    
    
    
    EmaillogDetailComponent,
EmaillogDetailFieldComponent,
    



  ],
  providers: [
    { provide: Emailing_SERVER_ROOT_URI, useValue: emailing_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    EmailtemplateService,
    EmaillogService,
  ],
  entryComponents: [EmailtemplateEditComponent,
  ]
})
export class EmailingModule { }