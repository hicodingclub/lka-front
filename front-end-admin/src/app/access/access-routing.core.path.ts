// Import components for each schema

import { MusergroupListComponent } from './musergroup/musergroup-list/musergroup-list.component';

import { MusergroupDetailComponent } from './musergroup/musergroup-detail/musergroup-detail.component';

import { MusergroupEditComponent } from './musergroup/musergroup-edit/musergroup-edit.component';


import { MpubmoduleListComponent } from './mpubmodule/mpubmodule-list/mpubmodule-list.component';

import { MpubmoduleDetailComponent } from './mpubmodule/mpubmodule-detail/mpubmodule-detail.component';

import { MpubmoduleEditComponent } from './mpubmodule/mpubmodule-edit/mpubmodule-edit.component';


import { MpubaccessListComponent } from './mpubaccess/mpubaccess-list/mpubaccess-list.component';

import { MpubaccessDetailComponent } from './mpubaccess/mpubaccess-detail/mpubaccess-detail.component';

import { MpubaccessEditComponent } from './mpubaccess/mpubaccess-edit/mpubaccess-edit.component';
import { MpubaccessListSubComponent } from './mpubaccess/mpubaccess-list/mpubaccess-list-sub.component';


import { AuthGuard } from '@hicoder/angular-auth';


const mpubaccessSubPath = [
    {path: 'list', component: MpubaccessListSubComponent}
];


const musergroupDetailPath = [

    {path: 'mpubaccess', children: mpubaccessSubPath,
        data: {'mraLevel': 2, 'item': 'mpubaccess'}},
];

const mpubmoduleDetailPath = [

    {path: 'mpubaccess', children: mpubaccessSubPath,
        data: {'mraLevel': 2, 'item': 'mpubaccess'}},
];


export const musergroupRoutingCorePath = [
    {path: 'list', component: MusergroupListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MusergroupDetailComponent, children: musergroupDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MusergroupEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MusergroupEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const mpubmoduleRoutingCorePath = [
    {path: 'list', component: MpubmoduleListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MpubmoduleDetailComponent, children: mpubmoduleDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MpubmoduleEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MpubmoduleEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const mpubaccessRoutingCorePath = [
    {path: 'list', component: MpubaccessListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MpubaccessDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MpubaccessEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MpubaccessEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

