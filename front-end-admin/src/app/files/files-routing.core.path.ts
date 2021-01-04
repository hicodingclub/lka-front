// Import components for each schema
import {
  MfileListComponent
} from './mfile/mfile-list/mfile-list.component';
import {
  MfileEditComponent
} from './mfile/mfile-edit/mfile-edit.component';
import {
  MfileListSubComponent
} from './mfile/mfile-list/mfile-list-sub.component';
import {
  MfilegroupListComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list.component';
import {
  MfilegroupDetailComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail.component';
import {
  MfilegroupEditComponent
} from './mfilegroup/mfilegroup-edit/mfilegroup-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const mfileSubPath = [{
  path: 'list',
  component: MfileListSubComponent
}];
const mfilegroupDetailPath = [{
  path: 'mfile',
  children: mfileSubPath,
  data: {
    'mraLevel': 2,
    'item': 'mfile'
  }
}, ];
export const mfileRoutingCorePath = [{
  path: 'list',
  component: MfileListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MfileEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const mfilegroupRoutingCorePath = [{
  path: 'list',
  component: MfilegroupListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: MfilegroupDetailComponent,
  children: mfilegroupDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: MfilegroupEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: MfilegroupEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];