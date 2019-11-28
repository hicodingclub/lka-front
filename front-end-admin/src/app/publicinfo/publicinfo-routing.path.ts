// Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';

import { EventDetailWidgetPostComponent } from './event/event-detail/event-detail-widget-post.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';


import { ArticleListComponent } from './article/article-list/article-list.component';

import { ArticleDetailWidgetPostComponent } from './article/article-detail/article-detail-widget-post.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';


import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';

import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';


import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';

import { GeneralinfoDetailWidgetInfoComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import { GeneralinfoEditComponent } from './generalinfo/generalinfo-edit/generalinfo-edit.component';


import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';

import { KeynoteDetailWidgetSlideComponent } from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import { KeynoteEditComponent } from './keynote/keynote-edit/keynote-edit.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const eventRoutingPath = [
    {path: 'list', component: EventListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: EventDetailWidgetPostComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EventEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EventEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const articleRoutingPath = [
    {path: 'list', component: ArticleListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: ArticleDetailWidgetPostComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: ArticleEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: ArticleEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const faqRoutingPath = [
    {path: 'list', component: FaqListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: FaqDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: FaqEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: FaqEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const generalinfoRoutingPath = [
    {path: 'list', component: GeneralinfoListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: GeneralinfoDetailWidgetInfoComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: GeneralinfoEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const keynoteRoutingPath = [
    {path: 'list', component: KeynoteListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: KeynoteDetailWidgetSlideComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: KeynoteEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: KeynoteEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

