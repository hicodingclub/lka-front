import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './publicinfo.directive';




import { FileUploadModule } from 'mdds-angular-file';

import { MraModule } from 'mean-rest-angular';

import { PublicinfoRoutingModule } from './publicinfo-routing.module';
import { PublicinfoComponent } from './publicinfo.component';


import { Publicinfo_SERVER_ROOT_URI } from './publicinfo.tokens';
import { publicinfo_server_root_uri } from '../publicinfo.conf';

// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';



import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';

import { GeneralinfoService } from './generalinfo/generalinfo.service';

import { FaqListComponent } from './faq/faq-list/faq-list.component';





import { FaqService } from './faq/faq.service';

import { EventListComponent } from './event/event-list/event-list.component';
import { EventListHomeComponent } from './event/event-list/event-list-home.component';


import { EventDetailComponent } from './event/event-detail/event-detail.component';

import { EventService } from './event/event.service';

import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';


import { KeynoteListActSldComponent } from './keynote/keynote-list/keynote-list-act-sld.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';

import { KeynoteService } from './keynote/keynote.service';

import { TermsListComponent } from './terms/terms-list/terms-list.component';



import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';

import { TermsService } from './terms/terms.service';

import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleListHomeComponent } from './article/article-list/article-list-home.component';


import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

import { ArticleService } from './article/article.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MraModule,
    FileUploadModule,

    PublicinfoRoutingModule
  ],
  declarations: [
    PublicinfoComponent,
    

    GeneralinfoListComponent,
    
    
    
    GeneralinfoDetailComponent,
    
    FaqListComponent,
    
    
    
    
    
    EventListComponent,
    EventListHomeComponent,
    
    
    EventDetailComponent,
    
    KeynoteListComponent,
    
    
    KeynoteListActSldComponent,
    KeynoteDetailComponent,
    
    TermsListComponent,
    
    
    
    TermsDetailComponent,
    
    ArticleListComponent,
    ArticleListHomeComponent,
    
    
    ArticleDetailComponent,
    






  ],
  exports: [
    PublicinfoComponent,

    GeneralinfoListComponent,
    
    
    
    GeneralinfoDetailComponent,
    
    FaqListComponent,
    
    
    
    
    
    EventListComponent,
    EventListHomeComponent,
    
    
    EventDetailComponent,
    
    KeynoteListComponent,
    
    
    KeynoteListActSldComponent,
    KeynoteDetailComponent,
    
    TermsListComponent,
    
    
    
    TermsDetailComponent,
    
    ArticleListComponent,
    ArticleListHomeComponent,
    
    
    ArticleDetailComponent,
    


  ],
  providers: [
    { provide: Publicinfo_SERVER_ROOT_URI, useValue: publicinfo_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    GeneralinfoService,
    FaqService,
    EventService,
    KeynoteService,
    TermsService,
    ArticleService,
  ],
  entryComponents: [TermsDetailComponent,
  ]
})
export class PublicinfoModule { }
