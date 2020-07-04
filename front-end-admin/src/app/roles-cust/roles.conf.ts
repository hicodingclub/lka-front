import { Routes } from '@angular/router';

import { RolesComponent } from '../roles/roles.component';

//Import routing paths
import { 
  mroleRoutingCorePath, 
  mmoduleRoutingCorePath, 
  mpermissionRoutingCorePath, 
  maccountRoutingCorePath, 
  maccountroleRoutingCorePath,  
} from '../roles/roles-routing.core.path';

export const RolesCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'roles',

    component: RolesComponent,
    children: [
      {path: '',  redirectTo: 'mrole', pathMatch: 'full'},

      { path: 'mrole',
        children: mroleRoutingCorePath,
        data: {mraLevel: 1, item: 'mrole'}
      },
      { path: 'mmodule',
        children: mmoduleRoutingCorePath,
        data: {mraLevel: 1, item: 'mmodule'}
      },
      { path: 'mpermission',
        children: mpermissionRoutingCorePath,
        data: {mraLevel: 1, item: 'mpermission'}
      },
      { path: 'maccount',
        children: maccountRoutingCorePath,
        data: {mraLevel: 1, item: 'maccount'}
      },
      { path: 'maccountrole',
        children: maccountroleRoutingCorePath,
        data: {mraLevel: 1, item: 'maccountrole'}
      },
    ]
  },
];

import { RolesRoutingCustPath } from './roles-routing.cust.path';

export const RolesRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'roles/cust',

    children: RolesRoutingCustPath,
  },
];

export const roles_server_root_uri: string = '/api/roles';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 18:36:52 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { RolesComponent } from '../roles/roles.component';

//Import routing paths
import { 
  mroleRoutingCorePath,
  mmoduleRoutingCorePath,
  mpermissionRoutingCorePath,
  maccountRoutingCorePath,
  maccountroleRoutingCorePath,
} from '../roles/roles-routing.core.path';

export const RolesCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'roles',

    component: RolesComponent,
    children: [
      {path: '',  redirectTo: 'mrole', pathMatch: 'full'},

      { path: 'mrole',
        children: mroleRoutingCorePath,
        data: {mraLevel: 1, item: 'mrole'}
      },
      { path: 'mmodule',
        children: mmoduleRoutingCorePath,
        data: {mraLevel: 1, item: 'mmodule'}
      },
      { path: 'mpermission',
        children: mpermissionRoutingCorePath,
        data: {mraLevel: 1, item: 'mpermission'}
      },
      { path: 'maccount',
        children: maccountRoutingCorePath,
        data: {mraLevel: 1, item: 'maccount'}
      },
      { path: 'maccountrole',
        children: maccountroleRoutingCorePath,
        data: {mraLevel: 1, item: 'maccountrole'}
      },
    ]
  },
];

import { RolesRoutingCustPath } from './roles-routing.cust.path';

export const RolesRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'roles/cust',

    children: RolesRoutingCustPath,
  },
];**** End of recent updates.<<<*/
