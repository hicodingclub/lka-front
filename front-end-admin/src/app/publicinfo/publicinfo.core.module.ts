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
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventDetailWidgetPostComponent } from './event/event-detail/event-detail-widget-post.component';
import { EventDetailFieldComponent } from './event/event-detail/event-detail-field.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleDetailWidgetPostComponent } from './article/article-detail/article-detail-widget-post.component';
import { ArticleDetailFieldComponent } from './article/article-detail/article-detail-field.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { FaqDetailFieldComponent } from './faq/faq-detail/faq-detail-field.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';
import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoDetailWidgetInfoComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import { GeneralinfoDetailFieldComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-field.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';
import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';
import { KeynoteDetailWidgetSlideComponent } from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import { KeynoteDetailFieldComponent } from './keynote/keynote-detail/keynote-detail-field.component';
import { KeynoteEditComponent } from './keynote/keynote-edit/keynote-edit.component';

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
    EventListComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    EventEditComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    ArticleEditComponent,
    FaqListComponent,
    FaqDetailComponent,
    FaqDetailFieldComponent,
    FaqEditComponent,
    GeneralinfoListComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    GeneralinfoEditComponent,
    KeynoteListComponent,
    KeynoteDetailComponent,
    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    KeynoteEditComponent,
  ],
  exports: [
    PublicinfoComponent,
    EventListComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    EventEditComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    ArticleEditComponent,
    FaqListComponent,
    FaqDetailComponent,
    FaqDetailFieldComponent,
    FaqEditComponent,
    GeneralinfoListComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    GeneralinfoEditComponent,
    KeynoteListComponent,
    KeynoteDetailComponent,
    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    KeynoteEditComponent,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
    EventDetailWidgetPostComponent,
    EventEditComponent,
    ArticleDetailWidgetPostComponent,
    ArticleEditComponent,
    FaqEditComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoEditComponent,
    KeynoteDetailWidgetSlideComponent,
    KeynoteEditComponent,
  ]
})
export class PublicinfoCoreModule { }
