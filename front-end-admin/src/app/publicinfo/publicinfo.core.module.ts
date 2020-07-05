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
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventListCustComponent } from '../publicinfo-cust/base/event/event-list.cust.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventDetailCustComponent } from '../publicinfo-cust/base/event/event-detail.cust.component';
import { EventDetailWidgetPostComponent } from './event/event-detail/event-detail-widget-post.component';
import { EventDetailFieldComponent } from './event/event-detail/event-detail-field.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventEditCustComponent } from '../publicinfo-cust/base/event/event-edit.cust.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleListCustComponent } from '../publicinfo-cust/base/article/article-list.cust.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleDetailCustComponent } from '../publicinfo-cust/base/article/article-detail.cust.component';
import { ArticleDetailWidgetPostComponent } from './article/article-detail/article-detail-widget-post.component';
import { ArticleDetailFieldComponent } from './article/article-detail/article-detail-field.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { ArticleEditCustComponent } from '../publicinfo-cust/base/article/article-edit.cust.component';
import { FaqComponent } from './faq/faq.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqListCustComponent } from '../publicinfo-cust/base/faq/faq-list.cust.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { FaqDetailCustComponent } from '../publicinfo-cust/base/faq/faq-detail.cust.component';
import { FaqDetailFieldComponent } from './faq/faq-detail/faq-detail-field.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';
import { FaqEditCustComponent } from '../publicinfo-cust/base/faq/faq-edit.cust.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';
import { GeneralinfoListCustComponent } from '../publicinfo-cust/base/generalinfo/generalinfo-list.cust.component';
import { GeneralinfoDetailComponent } from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import { GeneralinfoDetailCustComponent } from '../publicinfo-cust/base/generalinfo/generalinfo-detail.cust.component';
import { GeneralinfoDetailWidgetInfoComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import { GeneralinfoDetailFieldComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-field.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';
import { GeneralinfoEditCustComponent } from '../publicinfo-cust/base/generalinfo/generalinfo-edit.cust.component';
import { KeynoteComponent } from './keynote/keynote.component';
import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';
import { KeynoteListCustComponent } from '../publicinfo-cust/base/keynote/keynote-list.cust.component';
import { KeynoteDetailComponent } from './keynote/keynote-detail/keynote-detail.component';
import { KeynoteDetailCustComponent } from '../publicinfo-cust/base/keynote/keynote-detail.cust.component';
import { KeynoteDetailWidgetSlideComponent } from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import { KeynoteDetailFieldComponent } from './keynote/keynote-detail/keynote-detail-field.component';
import { KeynoteEditComponent } from './keynote/keynote-edit/keynote-edit.component';
import { KeynoteEditCustComponent } from '../publicinfo-cust/base/keynote/keynote-edit.cust.component';

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
    EventComponent,
    EventListComponent,
    EventListCustComponent,
    EventDetailCustComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    EventEditComponent,
    EventEditCustComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleListCustComponent,
    ArticleDetailCustComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    ArticleEditComponent,
    ArticleEditCustComponent,
    FaqComponent,
    FaqListComponent,
    FaqListCustComponent,
    FaqDetailCustComponent,
    FaqDetailComponent,
    FaqDetailFieldComponent,
    FaqEditComponent,
    FaqEditCustComponent,
    GeneralinfoComponent,
    GeneralinfoListComponent,
    GeneralinfoListCustComponent,
    GeneralinfoDetailCustComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    GeneralinfoEditComponent,
    GeneralinfoEditCustComponent,
    KeynoteComponent,
    KeynoteListComponent,
    KeynoteListCustComponent,
    KeynoteDetailCustComponent,
    KeynoteDetailComponent,
    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    KeynoteEditComponent,
    KeynoteEditCustComponent,
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
