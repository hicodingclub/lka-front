import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './publicinfo.directive';




import { FileUploadModule } from '@hicoder/angular-file';


import { MraModule } from '@hicoder/angular-core';

import { PublicinfoRoutingModule } from './publicinfo-routing.module';
import { PublicinfoComponent } from './publicinfo.component';


import { Publicinfo_SERVER_ROOT_URI } from './publicinfo.tokens';
import { publicinfo_server_root_uri } from '../publicinfo.conf';

// Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';

import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventDetailFieldComponent } from './event/event-detail/event-detail-field.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';

import { EventService } from './event/event.service';

import { ArticleListComponent } from './article/article-list/article-list.component';

import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleDetailFieldComponent } from './article/article-detail/article-detail-field.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';

import { ArticleService } from './article/article.service';

import { FaqListComponent } from './faq/faq-list/faq-list.component';

import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { FaqDetailFieldComponent } from './faq/faq-detail/faq-detail-field.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';

import { FaqService } from './faq/faq.service';

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';

import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoDetailFieldComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-field.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';

import { GeneralinfoService } from './generalinfo/generalinfo.service';

import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';

import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';
import { KeynoteDetailFieldComponent } from './keynote/keynote-detail/keynote-detail-field.component';
import { KeynoteEditComponent } from './keynote/keynote-edit/keynote-edit.component';

import { KeynoteService } from './keynote/keynote.service';





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
    

    EventListComponent,

    EventDetailComponent,
    EventDetailFieldComponent,
    EventEditComponent,

    ArticleListComponent,

    ArticleDetailComponent,
    ArticleDetailFieldComponent,
    ArticleEditComponent,

    FaqListComponent,

    FaqDetailComponent,
    FaqDetailFieldComponent,
    FaqEditComponent,

    GeneralinfoListComponent,

    GeneralinfoDetailComponent,
    GeneralinfoDetailFieldComponent,
    GeneralinfoEditComponent,

    KeynoteListComponent,

    KeynoteDetailComponent,
    KeynoteDetailFieldComponent,
    KeynoteEditComponent,







  ],
  exports: [
    PublicinfoComponent,

    EventListComponent,

    EventDetailComponent,
    EventDetailFieldComponent,
    EventEditComponent,

    ArticleListComponent,

    ArticleDetailComponent,
    ArticleDetailFieldComponent,
    ArticleEditComponent,

    FaqListComponent,

    FaqDetailComponent,
    FaqDetailFieldComponent,
    FaqEditComponent,

    GeneralinfoListComponent,

    GeneralinfoDetailComponent,
    GeneralinfoDetailFieldComponent,
    GeneralinfoEditComponent,

    KeynoteListComponent,

    KeynoteDetailComponent,
    KeynoteDetailFieldComponent,
    KeynoteEditComponent,



  ],
  providers: [
    { provide: Publicinfo_SERVER_ROOT_URI, useValue: publicinfo_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    EventService,
    ArticleService,
    FaqService,
    GeneralinfoService,
    KeynoteService,
  ],
  entryComponents: [
    EventEditComponent,
    ArticleEditComponent,
    FaqEditComponent,
    GeneralinfoEditComponent,
    KeynoteEditComponent,
  ]
})
export class PublicinfoModule { }
