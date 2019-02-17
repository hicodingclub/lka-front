// Import components for each schema

import { MroleListComponent } from './mrole/mrole-list/mrole-list.component';
import { MroleDetailComponent } from './mrole/mrole-detail/mrole-detail.component';
import { MroleEditComponent } from './mrole/mrole-edit/mrole-edit.component';


import { MmoduleListComponent } from './mmodule/mmodule-list/mmodule-list.component';
import { MmoduleDetailComponent } from './mmodule/mmodule-detail/mmodule-detail.component';
import { MmoduleEditComponent } from './mmodule/mmodule-edit/mmodule-edit.component';


import { MpermissionListComponent } from './mpermission/mpermission-list/mpermission-list.component';
import { MpermissionDetailComponent } from './mpermission/mpermission-detail/mpermission-detail.component';
import { MpermissionEditComponent } from './mpermission/mpermission-edit/mpermission-edit.component';

import { MpermissionListSubComponent } from './mpermission/mpermission-list/mpermission-list-sub.component';


import { MuserListComponent } from './muser/muser-list/muser-list.component';
import { MuserDetailComponent } from './muser/muser-detail/muser-detail.component';
import { MuserEditComponent } from './muser/muser-edit/muser-edit.component';


import { MuserroleListComponent } from './muserrole/muserrole-list/muserrole-list.component';
import { MuserroleDetailComponent } from './muserrole/muserrole-detail/muserrole-detail.component';
import { MuserroleEditComponent } from './muserrole/muserrole-edit/muserrole-edit.component';

import { MuserroleListSubComponent } from './muserrole/muserrole-list/muserrole-list-sub.component';



import { AuthGuard } from '../auth/';


const mpermissionSubPath = [
    {path: 'list', component: MpermissionListSubComponent}
];

const muserroleSubPath = [
    {path: 'list', component: MuserroleListSubComponent}
];


const mroleDetailPath = [

    {path: 'mpermission', children: mpermissionSubPath,
        data: {'mraLevel': 2, 'item': 'mpermission'}},
    {path: 'muserrole', children: muserroleSubPath,
        data: {'mraLevel': 2, 'item': 'muserrole'}},
];

const mmoduleDetailPath = [

    {path: 'mpermission', children: mpermissionSubPath,
        data: {'mraLevel': 2, 'item': 'mpermission'}},
];

const muserDetailPath = [

    {path: 'muserrole', children: muserroleSubPath,
        data: {'mraLevel': 2, 'item': 'muserrole'}},
];


export const mroleRoutingPath = [
    {path: 'list', component: MroleListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MroleDetailComponent, children: mroleDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MroleEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MroleEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const mmoduleRoutingPath = [
    {path: 'list', component: MmoduleListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MmoduleDetailComponent, children: mmoduleDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MmoduleEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MmoduleEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const mpermissionRoutingPath = [
    {path: 'list', component: MpermissionListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MpermissionDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MpermissionEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MpermissionEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const muserRoutingPath = [
    {path: 'list', component: MuserListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MuserDetailComponent, children: muserDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MuserEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MuserEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const muserroleRoutingPath = [
    {path: 'list', component: MuserroleListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: MuserroleDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: MuserroleEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: MuserroleEditComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
