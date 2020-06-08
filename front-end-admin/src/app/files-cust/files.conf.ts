import { Routes } from '@angular/router';

import { FilesComponent } from '../files/files.component';

//Import routing paths
import { 
  mfileRoutingCorePath, 
  mfilegroupRoutingCorePath,  
} from '../files/files-routing.core.path';

export const FilesCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'files',

    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: 'mfile',
        children: mfileRoutingCorePath,
        data: {mraLevel: 1, item: 'mfile'}
      },
      { path: 'mfilegroup',
        children: mfilegroupRoutingCorePath,
        data: {mraLevel: 1, item: 'mfilegroup'}
      },
    ]
  },
];

import { FilesRoutingCustPath } from './files-routing.cust.path';

export const FilesRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'files/cust',

    children: FilesRoutingCustPath,
  },
];

export const files_server_root_uri: string = '/api/files';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jun 07 2020 21:11:24 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { FilesComponent } from '../files/files.component';

//Import routing paths
import { 
  mfileRoutingCorePath,
  mfilegroupRoutingCorePath,
} from '../files/files-routing.core.path';

export const FilesCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'files',

    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: 'mfile',
        children: mfileRoutingCorePath,
        data: {mraLevel: 1, item: 'mfile'}
      },
      { path: 'mfilegroup',
        children: mfilegroupRoutingCorePath,
        data: {mraLevel: 1, item: 'mfilegroup'}
      },
    ]
  },
];

import { FilesRoutingCustPath } from './files-routing.cust.path';

export const FilesRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'files/cust',

    children: FilesRoutingCustPath,
  },
];**** End of recent updates.<<<*/
