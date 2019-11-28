// Import components for each schema

import { GeneralinfoListComponent } from './generalinfo/generalinfo-list/generalinfo-list.component';

import { GeneralinfoDetailWidgetInfoComponent } from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';



import { FaqListComponent } from './faq/faq-list/faq-list.component';





import { EventListComponent } from './event/event-list/event-list.component';

import { EventDetailWidgetPostComponent } from './event/event-detail/event-detail-widget-post.component';



import { KeynoteListComponent } from './keynote/keynote-list/keynote-list.component';

import { KeynoteDetailWidgetSlideComponent } from './keynote/keynote-detail/keynote-detail-widget-slide.component';



import { ArticleListComponent } from './article/article-list/article-list.component';

import { ArticleDetailWidgetPostComponent } from './article/article-detail/article-detail-widget-post.component';




import { AuthGuard } from '@hicoder/angular-auth';




export const generalinfoRoutingPath = [
    {path: 'list', component: GeneralinfoListComponent},
     {path: 'detail/:id', component: GeneralinfoDetailWidgetInfoComponent},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const faqRoutingPath = [
    {path: 'list', component: FaqListComponent},
     
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const eventRoutingPath = [
    {path: 'list', component: EventListComponent},
     {path: 'detail/:id', component: EventDetailWidgetPostComponent},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const keynoteRoutingPath = [
    {path: 'list', component: KeynoteListComponent},
     {path: 'detail/:id', component: KeynoteDetailWidgetSlideComponent},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const articleRoutingPath = [
    {path: 'list', component: ArticleListComponent},
     {path: 'detail/:id', component: ArticleDetailWidgetPostComponent},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

