import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './publicinfo.directive';




import { FileUploadModule } from '@hicoder/angular-file';


import { MddsCoreModule } from '@hicoder/angular-core';

import { PublicinfoRoutingModule } from './publicinfo-routing.module';
import { PublicinfoComponent } from './publicinfo.component';


import { Publicinfo_SERVER_ROOT_URI } from './publicinfo.tokens';
import { publicinfo_server_root_uri } from '../publicinfo.conf';

// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';

import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';

    import { GeneralinfoDetailWidgetInfoComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import { GeneralinfoDetailFieldComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-field.component';


import { GeneralinfoService } from './generalinfo/generalinfo.service';

import { FaqListComponent } from './faq/faq-list/faq-list.component';



import { FaqDetailFieldComponent } from './faq/faq-detail/faq-detail-field.component';


import { FaqService } from './faq/faq.service';

import { EventListComponent } from './event/event-list/event-list.component';

import { EventListWidgetCleanComponent } from './event/event-list/event-list-widget-clean.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

    import { EventDetailWidgetPostComponent } from './event/event-detail/event-detail-widget-post.component';
import { EventDetailFieldComponent } from './event/event-detail/event-detail-field.component';


import { EventService } from './event/event.service';

import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';

import { KeynoteListWidgetSldComponent } from './keynote/keynote-list/keynote-list-widget-sld.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';

    import { KeynoteDetailWidgetSlideComponent } from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import { KeynoteDetailFieldComponent } from './keynote/keynote-detail/keynote-detail-field.component';


import { KeynoteService } from './keynote/keynote.service';

import { ArticleListComponent } from './article/article-list/article-list.component';

import { ArticleListWidgetCleanComponent } from './article/article-list/article-list-widget-clean.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

    import { ArticleDetailWidgetPostComponent } from './article/article-detail/article-detail-widget-post.component';
import { ArticleDetailFieldComponent } from './article/article-detail/article-detail-field.component';


import { ArticleService } from './article/article.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,

    PublicinfoRoutingModule
  ],
  declarations: [
    PublicinfoComponent,
    

    GeneralinfoListComponent,

    GeneralinfoDetailComponent,

    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    

    FaqListComponent,

    

    FaqDetailFieldComponent,
    

    EventListComponent,

    EventListWidgetCleanComponent,
    EventDetailComponent,

    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    

    KeynoteListComponent,

    KeynoteListWidgetSldComponent,
    KeynoteDetailComponent,

    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    

    ArticleListComponent,

    ArticleListWidgetCleanComponent,
    ArticleDetailComponent,

    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    







  ],
  exports: [
    PublicinfoComponent,

    GeneralinfoListComponent,

    GeneralinfoDetailComponent,

    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    

    FaqListComponent,

    

    FaqDetailFieldComponent,
    

    EventListComponent,

    EventListWidgetCleanComponent,
    EventDetailComponent,

    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    

    KeynoteListComponent,

    KeynoteListWidgetSldComponent,
    KeynoteDetailComponent,

    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    

    ArticleListComponent,

    ArticleListWidgetCleanComponent,
    ArticleDetailComponent,

    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    



  ],
  providers: [
    { provide: Publicinfo_SERVER_ROOT_URI, useValue: publicinfo_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    GeneralinfoService,
    FaqService,
    EventService,
    KeynoteService,
    ArticleService,
  ],
  entryComponents: [
    GeneralinfoDetailWidgetInfoComponent,
    EventListWidgetCleanComponent,
    EventDetailWidgetPostComponent,
    KeynoteListWidgetSldComponent,
    KeynoteDetailWidgetSlideComponent,
    ArticleListWidgetCleanComponent,
    ArticleDetailWidgetPostComponent,
  ]
})
export class PublicinfoModule { }
