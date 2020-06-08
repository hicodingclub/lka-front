import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './publicinfo.directive';




import { FileUploadModule } from '@hicoder/angular-file';


import { MddsCoreModule } from '@hicoder/angular-core';

import { PublicinfoRoutingCoreModule } from './publicinfo-routing.core.module';
import { PublicinfoComponent } from './publicinfo.component';



// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';

import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';

import { GeneralinfoDetailWidgetInfoComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import { GeneralinfoDetailFieldComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-field.component';



import { FaqListComponent } from './faq/faq-list/faq-list.component';



import { FaqDetailFieldComponent } from './faq/faq-detail/faq-detail-field.component';



import { EventListComponent } from './event/event-list/event-list.component';

import { EventDetailComponent } from './event/event-detail/event-detail.component';

import { EventDetailWidgetPostComponent } from './event/event-detail/event-detail-widget-post.component';
import { EventDetailFieldComponent } from './event/event-detail/event-detail-field.component';



import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';

import { KeynoteListWidgetSldComponent } from './keynote/keynote-list/keynote-list-widget-sld.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';

import { KeynoteDetailWidgetSlideComponent } from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import { KeynoteDetailFieldComponent } from './keynote/keynote-detail/keynote-detail-field.component';



import { ArticleListComponent } from './article/article-list/article-list.component';

import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

import { ArticleDetailWidgetPostComponent } from './article/article-detail/article-detail-widget-post.component';
import { ArticleDetailFieldComponent } from './article/article-detail/article-detail-field.component';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,


    PublicinfoRoutingCoreModule,
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

    EventDetailComponent,

    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    

    KeynoteListComponent,

    KeynoteListWidgetSldComponent,
    KeynoteDetailComponent,

    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    

    ArticleListComponent,

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

    EventDetailComponent,

    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    

    KeynoteListComponent,

    KeynoteListWidgetSldComponent,
    KeynoteDetailComponent,

    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    

    ArticleListComponent,

    ArticleDetailComponent,

    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    







  ],
  providers: [

    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
    GeneralinfoDetailWidgetInfoComponent,
    EventDetailWidgetPostComponent,
    KeynoteListWidgetSldComponent,
    KeynoteDetailWidgetSlideComponent,
    ArticleDetailWidgetPostComponent,
  ]
})
export class PublicinfoCoreModule { }
